import { test_api_key } from "$lib/server/secrets";
import type { RequestHandler } from "./$types";
import Stripe from 'stripe';

const stripe = new Stripe(test_api_key, {
    apiVersion: '2023-08-16'
});

const domain: string = "http://localhost:3000";

export const POST: RequestHandler = async ({request}) => {
    // items: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
    const data = await request.json();
    const items: [] = data.items;

   
    console.log(items);
    /*
        we have: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
        stripe wants: [ { price: "1", quantity: 6 }, { price: "2", quantity: 3 } ]
    */

    let lineItems: { price: string; quantity: number; }[] = [];
    items.forEach((item: any) => {
        lineItems.push( { price: item.id, quantity: 1 } )
    });

    // It gives us a URL for the person to check out with
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1NibETD09EWpqQ4Y0Nh7Oyad',
                quantity: 1,
            }
        ],
        mode: 'subscription',
        success_url: `${domain}/success`, // Needs to be set to base url 
        cancel_url: `${domain}/cancel`,
    });

    return new Response(
        JSON.stringify({ url: session.url }), // frontend will get this url to redirect
        {
            status: 200,
            headers: { 'content-type': 'application/json'}
        }
    )
}
