import { z as create_anchor, E as ensure_array_like, C as stringify, B as attr, F as escape_text, y as pop, t as push } from "../../../chunks/index.js";
import { P as Prose } from "../../../chunks/ContactForm.svelte_svelte_type_style_lang.js";
import { S as Section, V as Video, I as Inview, b as fromTopPreset, C as Container } from "../../../chunks/transitionOptions.js";
import { f as fromLeft, a as Card, b as fromRight, c as fromTop, C as Classes } from "../../../chunks/Classes.js";
const testimonials = [
  {
    name: "Josh",
    body: "Philosophy and community of this gym by far the best I've experienced in Hong Kong. Driven coach and wholesome group.",
    href: "",
    img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9350.jpg"
  },
  {
    name: "Jorge",
    body: "Philosophy and community of this gym by far the best I've experienced in Hong Kong. Driven coach and wholesome group.",
    href: "",
    img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg"
  },
  {
    name: "Petri",
    body: "Philosophy and community of this gym by far the best I've experienced in Hong Kong. Driven coach and wholesome group.",
    href: "",
    img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9288.jpg"
  }
];
function _page($$payload, $$props) {
  push(false);
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
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Prose($$payload, {
    size: "lg",
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      const anchor_5 = create_anchor($$payload2);
      const anchor_18 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      Section($$payload2, {
        class: "bg-background max-h-screen h-screen",
        id: "contact",
        children: ($$payload3, $$slotProps2) => {
          const anchor_2 = create_anchor($$payload3);
          const anchor_3 = create_anchor($$payload3);
          $$payload3.out += `${anchor_2}`;
          Video($$payload3, {
            class: "absolute w-full h-full not-prose object-cover object-center",
            srcset: { md: "/videos/slow_bjj.mp4", lg: "" }
          });
          $$payload3.out += `${anchor_2} <div class="bg-black/70 w-full h-full absolute z-[5]"></div> ${anchor_3}`;
          Inview($$payload3, {
            presetOptions: fromTopPreset,
            class: "z-[7]",
            children: ($$payload4, $$slotProps3) => {
              const anchor_4 = create_anchor($$payload4);
              $$payload4.out += `${anchor_4}`;
              Container($$payload4, {
                class: "grid gap-x-12 gap-y-8 items-start z-[7]",
                sizes: "max-w-7xl w-full h-full",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<h1 style="margin:0">WELCOME TO BUFFALO JIU-JITSU</h1>`;
                }
              });
              $$payload4.out += `${anchor_4}`;
            }
          });
          $$payload3.out += `${anchor_3}`;
        }
      });
      $$payload2.out += `${anchor_1} ${anchor_5}`;
      Section($$payload2, {
        class: "py-12 md:py-24",
        children: ($$payload3, $$slotProps2) => {
          const anchor_6 = create_anchor($$payload3);
          $$payload3.out += `${anchor_6}`;
          Container($$payload3, {
            class: "grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-12 items-start justify-start",
            sizes: "max-w-none w-full",
            padding: "px-8 md:px-16 xl:px-32",
            children: ($$payload4, $$slotProps3) => {
              const anchor_7 = create_anchor($$payload4);
              const each_array = ensure_array_like(aboutTopics);
              $$payload4.out += `${anchor_7}`;
              for (let i = 0; i < each_array.length; i++) {
                const $$item = each_array[i];
                const { title, body, cta } = $$item;
                const anchor_8 = create_anchor($$payload4);
                const anchor_9 = create_anchor($$payload4);
                const anchor_11 = create_anchor($$payload4);
                const anchor_16 = create_anchor($$payload4);
                $$payload4.out += `${anchor_8}${anchor_9}`;
                Inview($$payload4, {
                  class: "w-full h-full",
                  presetOptions: fromLeft,
                  children: ($$payload5, $$slotProps4) => {
                    const anchor_10 = create_anchor($$payload5);
                    $$payload5.out += `${anchor_10}`;
                    Card($$payload5, {
                      class: ` h-full w-full items-center justify-center aspect-[2/3] relative ${stringify(i % 2 != 0 ? "hidden" : "flex flex-col")}`,
                      children: ($$payload6, $$slotProps5) => {
                        $$payload6.out += `<img${attr("src", testimonials[i].img, false)}${attr("alt", testimonials[i].name, false)} class="absolute h-full w-full object-cover not-prose"> <div class="bg-black/60 w-full h-full absolute z-[5]"></div> <figure class="z-[7] w-full h-fit px-4"><blockquote class="not-prose text-center text-surface-on border-0 relative"><svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute h-32 z-20 stroke-primary left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"></path><use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use></svg> <p class="m-0 sm:m-0 uppercase">${escape_text(testimonials[i].body)}</p></blockquote> <figcaption><div class="mt-4 flex items-center justify-center"><div><p class="uppercase text-surface-on m-0 sm:m-0">${escape_text(testimonials[i].name)}</p></div></div></figcaption></figure>`;
                      }
                    });
                    $$payload5.out += `${anchor_10}`;
                  }
                });
                $$payload4.out += `${anchor_9} ${anchor_11}`;
                Inview($$payload4, {
                  class: "w-full h-full z-[7]",
                  presetOptions: i % 2 ? fromLeft : fromRight,
                  children: ($$payload5, $$slotProps4) => {
                    const anchor_12 = create_anchor($$payload5);
                    $$payload5.out += `${anchor_12}`;
                    Prose($$payload5, {
                      size: "sm",
                      class: "w-full h-full text-left",
                      children: ($$payload6, $$slotProps5) => {
                        const anchor_13 = create_anchor($$payload6);
                        $$payload6.out += `${anchor_13}`;
                        Card($$payload6, {
                          class: "flex flex-col relative",
                          size: "max-w-none",
                          children: ($$payload7, $$slotProps6) => {
                            const anchor_14 = create_anchor($$payload7);
                            const each_array_1 = ensure_array_like(body);
                            $$payload7.out += `<div${attr("class", `hidden lg:flex flex-col items-center justify-start text-primary text-9xl absolute ${stringify(i % 2 ? "left-full" : "right-full")} -top-12 font-black`, false)} style="margin: 0;"><h1 class="text-primary/50" style="margin: 0">0</h1> <h1 class="text-primary/50" style="margin:0">${escape_text(i + 1)}</h1></div> <h1 style="margin: 0;" class="pb-6">${escape_text(title)}</h1> ${anchor_14}`;
                            for (let $$index = 0; $$index < each_array_1.length; $$index++) {
                              const paragraph = each_array_1[$$index];
                              const anchor_15 = create_anchor($$payload7);
                              $$payload7.out += `${anchor_15}<p style="margin: 0;" class="py-2">${escape_text(paragraph)}</p>${anchor_15}`;
                            }
                            $$payload7.out += `${anchor_14}`;
                          }
                        });
                        $$payload6.out += `${anchor_13}`;
                      }
                    });
                    $$payload5.out += `${anchor_12}`;
                  }
                });
                $$payload4.out += `${anchor_11} ${anchor_16}`;
                Inview($$payload4, {
                  class: "w-full h-full",
                  presetOptions: fromRight,
                  children: ($$payload5, $$slotProps4) => {
                    const anchor_17 = create_anchor($$payload5);
                    $$payload5.out += `${anchor_17}`;
                    Card($$payload5, {
                      class: ` h-full w-full items-center justify-center aspect-[2/3] relative ${stringify(i % 2 == 0 ? "hidden" : "flex flex-col")}`,
                      children: ($$payload6, $$slotProps5) => {
                        $$payload6.out += `<img${attr("src", testimonials[i].img, false)}${attr("alt", testimonials[i].name, false)} class="absolute h-full w-full object-cover not-prose"> <div class="bg-black/60 w-full h-full absolute z-[5]"></div> <figure class="z-[7] w-full h-fit px-4"><blockquote class="not-prose text-center text-surface-on border-0 relative"><svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute h-32 z-20 stroke-primary left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"></path><use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use></svg> <p class="m-0 sm:m-0 uppercase">${escape_text(testimonials[i].body)}</p></blockquote> <figcaption><div class="mt-4 flex items-center justify-center"><div><p class="uppercase text-surface-on m-0 sm:m-0">${escape_text(testimonials[i].name)}</p></div></div></figcaption></figure>`;
                      }
                    });
                    $$payload5.out += `${anchor_17}`;
                  }
                });
                $$payload4.out += `${anchor_16}${anchor_8}`;
              }
              $$payload4.out += `${anchor_7}`;
            }
          });
          $$payload3.out += `${anchor_6}`;
        }
      });
      $$payload2.out += `${anchor_5} ${anchor_18}`;
      Section($$payload2, {
        class: "py-14",
        children: ($$payload3, $$slotProps2) => {
          const anchor_19 = create_anchor($$payload3);
          const anchor_22 = create_anchor($$payload3);
          $$payload3.out += `${anchor_19}`;
          Prose($$payload3, {
            size: "sm",
            children: ($$payload4, $$slotProps3) => {
              const anchor_20 = create_anchor($$payload4);
              $$payload4.out += `${anchor_20}`;
              Inview($$payload4, {
                class: "w-full h-full z-[5]",
                presetOptions: fromTop,
                children: ($$payload5, $$slotProps4) => {
                  const anchor_21 = create_anchor($$payload5);
                  $$payload5.out += `${anchor_21}`;
                  Container($$payload5, {
                    class: "flex flex-col text-center gap-2",
                    sizes: "w-full max-w-5xl",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<div class="hidden lg:flex flex-row z-[0] items-center justify-start text-primary text-9xl absolute left-1/2 -translate-x-1/2 -top-12 font-black" style="margin: 0;"><h1 class="text-primary/50" style="margin: 0">0</h1> <h1 class="text-primary/50" style="margin:0">4</h1></div> <h1 style="margin: 0;" class="pb-6 z-0">THE COST OF SPORT</h1> <p style="margin: 0;" class="py-2 pb-20">We believe that money should not be a significant barrier to sport, hence the cost of a single session or monthly membership is half that of HK Island or Kowloon.</p>`;
                    }
                  });
                  $$payload5.out += `${anchor_21}`;
                }
              });
              $$payload4.out += `${anchor_20}`;
            }
          });
          $$payload3.out += `${anchor_19} ${anchor_22}`;
          Classes($$payload3);
          $$payload3.out += `${anchor_22}`;
        }
      });
      $$payload2.out += `${anchor_18}`;
    }
  });
  $$payload.out += `${anchor}`;
  pop();
}
export {
  _page as default
};
