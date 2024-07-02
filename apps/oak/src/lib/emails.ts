import type { Tables } from './server/supabase.types';

export const emails = {
	'new-user': (context: { actionLink: string; email: string; password: string }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
    </head>
    <body>
      <h2>Oak Credentials</h2>
      <p>Your Oak administrator has created an account for you. Here is your credentials: </p>
      <b><a href="${context.actionLink}">Confirm and login</a></b>
      <ul>
        <li><b>Email: </b> ${context.email}</li>
        <li><b>Password: </b> ${context.password}</li>
      </ul>
    </body>
    </html>
  `,
	'new-entry': (context: { entryName: string; link: { url: string; label: string } }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
    </head>
    <body>
      <h2>New ${context.entryName} to approve</h2>
      <p>You have a new ${context.entryName} waiting to be approved: <a href="${context.link.url}">${context.link.label}</a></p>
    </body>
    </html>
  `,
	'entry-validation': (context: {
		entryName: string;
		action: string;
		link: { url: string; label: string };
	}) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
    </head>
    <body>
      <h2>${context.entryName} ${context.action}</h2>
      <p>Your ${context.entryName} has been ${context.action}: <a href="${context.link.url}">${context.link.label}</a></p>
    </body>
    </html>
  `,
	'review-contracts': (context: { contracts: Tables<'contracts'>[]; baseUrl: string }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
    </head>
    <body>
      <h2>Contracts to be reviewed</h2>
      <p>The following contracts need to be reviewed:</p>
      <ul>
        ${context.contracts.reduce((prev, curr) => prev + `<li><a href="${context.baseUrl}/app/contracts/${curr.id}">Contract #${curr.number}</a></li>`, '')}
      </ul>
    </body>
    </html>
  `,
	'review-submitted': (context: {
		ownerName: string;
		baseUrl: string;
		contract: Tables<'contracts'> & { vendor: Tables<'vendors'> };
	}) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
    </head>
    <body>
      <h2>Review submitted</h2>
      <p>${context.ownerName} has submitted a review for contract: <a href="${context.baseUrl}/app/contracts/{{contract.id}}">#${context.contract.number} ${context.contract.vendor.name}</a></p>
    </body>
    </html>
  `
};
