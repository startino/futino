import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { P as Prose } from "../../../chunks/Prose.js";
import "svelte-inview";
import { a as fromLeftPreset, S as Section, V as Video, I as Inview, C as Container } from "../../../chunks/transitionOptions.js";
import { C as Card } from "../../../chunks/Card.js";
import "crypto-js/sha256.js";
const testimonials = [
  {
    name: "Jorge Lewis",
    body: "Philosophy and community of this gym by far the best I've experienced in Hong Kong. Driven coach and wholesome group.",
    href: "",
    img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9350.jpg"
  },
  {
    name: "Jorge Lewis",
    body: "Philosophy and community of this gym by far the best I've experienced in Hong Kong. Driven coach and wholesome group.",
    href: "",
    img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9350.jpg"
  },
  {
    name: "Jorge Lewis",
    body: "Philosophy and community of this gym by far the best I've experienced in Hong Kong. Driven coach and wholesome group.",
    href: "",
    img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9350.jpg"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aboutTopics = [
    {
      title: "INTERESTED?",
      body: [
        "Tried it before, but would like another go?",
        "Or you have been training for a while but still consider yourself a beginner because something has been missing?",
        "Buffalo Jiu-Jitsu is here to provide you with a solid foundation in Jiu-Jitsu. We are dedicated to helping you grow and excel in this incredible sport.",
        "In Jiu-Jitsu, your journey is unique. We understand that everyone comes from different backgrounds and experiences. That's why our training is live. You can do it at your own pace. You will work with a partner to explore ideas and become skilful in small areas of the game first, then ‘join the dots’ to mature into a confident grappler. Whether you're looking to compete, stay fit, meet new friends or simply have a fun workout, we've got you covered.",
        "Located on the first floor of Buffalo Strength Gym in Mui Wo, Lantau Island, our training room culture offers challenges with a welcoming and supportive atmosphere. We are committed to your success and will guide you every step of the way. Come and try: your first week is on us."
      ],
      cta: { title: "GET STARTED", href: "/contact" }
    },
    {
      title: "EXCLUSIVELY NO GI",
      body: [
        "What’s a gi, anyway? Pronounced G-EE (as in ‘gear’), it is the Japanese period costume worn in Judo and Jiu-Jitsu, as well as other martial arts. It affords a level of proxy control over your opponent via his/her clothing and vice-versa.",
        "In contrast, ‘no gi’ involves simply a rashguard and shorts, which we are not allowed grab. We believe no gi Jiu-Jitsu fulfils the promise of this martial art: controlling another human without using any tools outside of ourselves. The comfort and purity of training in simple attire without a cumbersome gi, along with the recent explosion in popularity of no gi Jiu-Jitsu in both professional and amateur arenas has led to a movement by many to train exclusively in no gi Jiu-Jitsu.",
        "Previously seen as only for the younger and more athletic, no gi Jiu-Jitsu has developed to allow for older, less athletic and even physically-compromised practitioners to control more athletic opponents, thus enjoying their training while developing skills.",
        "No gi Jiu-Jitsu has taken the grappling world by storm and raised the profile of the sport around the world. Begin your no gi journey with us."
      ],
      cta: {}
    },
    {
      title: "OUR MANIFESTO",
      body: [
        "All our training sessions are ‘No Gi’. If someone wishes to train in a gi during an open mat, it is permissible, but our regular training sessions will not involve a gi.",
        "We have built a great ‘room’, which means our training culture is productive, welcoming, respectful, safe, a decent challenge and fun.",
        "We provide an environment for grapplers to explore and develop their game with a friendly, competitive attitude. We help each other get sharper by providing challenges. We act as a team on and off the mats."
      ],
      cta: {}
    }
  ];
  return `${validate_component(Prose, "Prose").$$render($$result, { size: "lg" }, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "bg-background max-h-screen h-screen",
          id: "contact"
        },
        {},
        {
          default: () => {
            return `${validate_component(Video, "Video").$$render(
              $$result,
              {
                class: "absolute w-full h-full not-prose object-cover object-center",
                srcset: { md: "/videos/slow_bjj.mp4", lg: "" }
              },
              {},
              {}
            )} <div class="bg-black/70 w-full h-full absolute z-[5]"></div> ${validate_component(Inview, "Inview").$$render($$result, { presetOptions: fromLeftPreset, class: "" }, {}, {
              default: () => {
                return `${validate_component(Container, "Container").$$render(
                  $$result,
                  {
                    class: "grid gap-x-12 gap-y-8 items-start z-[7]",
                    sizes: "max-w-7xl w-full h-full"
                  },
                  {},
                  {
                    default: () => {
                      return `<h1 class="" style="margin:0" data-svelte-h="svelte-qck5qp">WELCOME TO BUFFALO JIU-JITSU</h1>`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Section, "Section").$$render($$result, { class: "py-12 md:py-24" }, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render(
            $$result,
            {
              class: "grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 items-start justify-start",
              sizes: "max-w-none w-full",
              padding: "px-8 md:px-16 xl:px-32"
            },
            {},
            {
              default: () => {
                return `${each(aboutTopics, ({ title, body, cta }, i) => {
                  return `${validate_component(Card, "Card").$$render(
                    $$result,
                    {
                      class: "hidden lg:flex relative h-full w-full " + (i % 2 == 0 ? "" : "lg:hidden")
                    },
                    {},
                    {
                      default: () => {
                        return `<img${add_attribute("src", testimonials[i].img, 0)}${add_attribute("alt", testimonials[i].name, 0)} class="absolute h-full w-full object-cover not-prose"> <blockquote class="">${escape(testimonials[i].body)}</blockquote> <p>${escape(testimonials[i].name)}</p> `;
                      }
                    }
                  )} ${validate_component(Prose, "Prose").$$render($$result, { size: "sm", class: "w-full h-full " }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render(
                        $$result,
                        {
                          class: "flex flex-col ",
                          size: "max-w-none"
                        },
                        {},
                        {
                          default: () => {
                            return `<h6 style="margin: 0;" class="text-primary">0${escape(i + 1)}</h6> <h1 style="margin: 0;" class="pb-6">${escape(title)}</h1> ${each(body, (paragraph) => {
                              return `<p style="margin: 0;" class="py-2">${escape(paragraph)} </p>`;
                            })} `;
                          }
                        }
                      )} `;
                    }
                  })} ${validate_component(Card, "Card").$$render(
                    $$result,
                    {
                      class: "hidden lg:flex aspect-1 relative " + (i % 2 == 0 ? "lg:hidden" : "")
                    },
                    {},
                    {
                      default: () => {
                        return `<img${add_attribute("src", testimonials[i].img, 0)}${add_attribute("alt", testimonials[i].name, 0)} class="absolute h-full w-full object-cover not-prose"> <blockquote class="">${escape(testimonials[i].body)}</blockquote> <p>${escape(testimonials[i].name)}</p> `;
                      }
                    }
                  )}`;
                })}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
