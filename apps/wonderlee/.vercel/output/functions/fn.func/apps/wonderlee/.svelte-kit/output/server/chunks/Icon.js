import { z as create_anchor, B as attr, y as pop, D as sanitize_props, t as push } from "./index.js";
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${attr("class", $$sanitized_props.class, false)}>${anchor}`;
  if ($$sanitized_props.icon.toLowerCase() == "phone") {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="currentColor" viewBox="0 0 28.314 28.323" style="enable-background:new 0 0 28.314 28.323" xml:space="preserve"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"></path></svg>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    if ($$sanitized_props.icon.toLowerCase() == "calendar") {
      $$payload.out += "<!--ssr:if:true-->";
      $$payload.out += `<svg${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} viewBox="0 0 24 24"${attr("fill", $$sanitized_props.fillColor, false)}${attr("stroke", $$sanitized_props.strokeColor, false)}><path d="M4 8H20M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8M20 8V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H16M16 2V4M16 4H8M8 2V4" stroke-width="2"></path></svg>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}`;
      if ($$sanitized_props.icon.toLowerCase() == "email") {
        $$payload.out += "<!--ssr:if:true-->";
        $$payload.out += `<svg viewBox="0 -2.5 20 20"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="currentColor"><g id="icons" transform="translate(56.000000, 160.000000)"><path fill="currentColor" d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]"></path></g></g></g></g></svg>`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
        const anchor_3 = create_anchor($$payload);
        $$payload.out += `${anchor_3}`;
        if ($$sanitized_props.icon.toLowerCase() == "location") {
          $$payload.out += "<!--ssr:if:true-->";
          $$payload.out += `<svg fill="currentColor" viewBox="0 0 32 32"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path></g></svg>`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
          const anchor_4 = create_anchor($$payload);
          $$payload.out += `${anchor_4}`;
          if ($$sanitized_props.icon.toLowerCase() == "facebook") {
            $$payload.out += "<!--ssr:if:true-->";
            $$payload.out += `<svg fill="currentColor" viewBox="0 0 32 32"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path${attr("fill", $$sanitized_props.fillColor, false)} d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path></g></svg>`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            const anchor_5 = create_anchor($$payload);
            $$payload.out += `${anchor_5}`;
            if ($$sanitized_props.icon.toLowerCase() == "instagram") {
              $$payload.out += "<!--ssr:if:true-->";
              $$payload.out += `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"></path><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"></path></g></svg>`;
            } else {
              $$payload.out += "<!--ssr:if:false-->";
              const anchor_6 = create_anchor($$payload);
              $$payload.out += `${anchor_6}`;
              if ($$sanitized_props.icon.toLowerCase() == "down-arrow") {
                $$payload.out += "<!--ssr:if:true-->";
                $$payload.out += `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"${attr("fill", $$sanitized_props.fillColor, false)}></path></g></svg>`;
              } else {
                $$payload.out += "<!--ssr:if:false-->";
                const anchor_7 = create_anchor($$payload);
                $$payload.out += `${anchor_7}`;
                if ($$sanitized_props.icon.toLowerCase() == "home") {
                  $$payload.out += "<!--ssr:if:true-->";
                  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)}><path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path></svg>`;
                } else {
                  $$payload.out += "<!--ssr:if:false-->";
                  const anchor_8 = create_anchor($$payload);
                  $$payload.out += `${anchor_8}`;
                  if ($$sanitized_props.icon.toLowerCase() == "discount") {
                    $$payload.out += "<!--ssr:if:true-->";
                    $$payload.out += `<svg viewBox="0 0 16 16"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)}><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>`;
                  } else {
                    $$payload.out += "<!--ssr:if:false-->";
                    const anchor_9 = create_anchor($$payload);
                    $$payload.out += `${anchor_9}`;
                    if ($$sanitized_props.icon.toLowerCase() == "whatsapp") {
                      $$payload.out += "<!--ssr:if:true-->";
                      $$payload.out += `<svg fill="currentColor"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="XMLID_468_"><path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path><path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path></g></g></svg>`;
                    } else {
                      $$payload.out += "<!--ssr:if:false-->";
                      const anchor_10 = create_anchor($$payload);
                      $$payload.out += `${anchor_10}`;
                      if ($$sanitized_props.icon.toLowerCase() == "linkedin") {
                        $$payload.out += "<!--ssr:if:true-->";
                        $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>`;
                      } else {
                        $$payload.out += "<!--ssr:if:false-->";
                        const anchor_11 = create_anchor($$payload);
                        $$payload.out += `${anchor_11}`;
                        if ($$sanitized_props.icon.toLowerCase() == "github") {
                          $$payload.out += "<!--ssr:if:true-->";
                          $$payload.out += `<svg fill="currentColor"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path></svg>`;
                        } else {
                          $$payload.out += "<!--ssr:if:false-->";
                          const anchor_12 = create_anchor($$payload);
                          $$payload.out += `${anchor_12}`;
                          if ($$sanitized_props.icon.toLowerCase() == "checkmark") {
                            $$payload.out += "<!--ssr:if:true-->";
                            $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" fill="none"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} viewBox="0 0 24 25"><path fill="currentColor" fill-rule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clip-rule="evenodd"></path></svg>`;
                          } else {
                            $$payload.out += "<!--ssr:if:false-->";
                            const anchor_13 = create_anchor($$payload);
                            $$payload.out += `${anchor_13}`;
                            if ($$sanitized_props.icon.toLowerCase() == "youtube") {
                              $$payload.out += "<!--ssr:if:true-->";
                              $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 14000 9864"><g><path fill="#F61C0D" d="M13706 1542c-161,-606 -635,-1084 -1238,-1246 -1092,-294 -5470,-294 -5470,-294 0,0 -4378,0 -5470,294 -602,162 -1077,640 -1238,1246 -293,1099 -293,3392 -293,3392 0,0 0,2293 293,3392 161,606 635,1084 1238,1246 1092,294 5470,294 5470,294 0,0 4378,0 5470,-294 602,-162 1077,-640 1238,-1246 293,-1099 293,-3392 293,-3392 0,0 0,-2293 -293,-3392z"></path><polygon fill="#FFF" points="5566,7016 9225,4934 5566,2852 "></polygon></g></svg>`;
                            } else {
                              $$payload.out += "<!--ssr:if:false-->";
                              const anchor_14 = create_anchor($$payload);
                              $$payload.out += `${anchor_14}`;
                              if ($$sanitized_props.icon.toLowerCase() == "info") {
                                $$payload.out += "<!--ssr:if:true-->";
                                $$payload.out += `<svg viewBox="0 0 24 24" fill="none"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z" fill="currentColor"></path><path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="currentColor"></path></g></svg>`;
                              } else {
                                $$payload.out += "<!--ssr:if:false-->";
                                const anchor_15 = create_anchor($$payload);
                                $$payload.out += `${anchor_15}`;
                                if ($$sanitized_props.icon.toLowerCase() == "search") {
                                  $$payload.out += "<!--ssr:if:true-->";
                                  $$payload.out += `<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`;
                                } else {
                                  $$payload.out += "<!--ssr:if:false-->";
                                  const anchor_16 = create_anchor($$payload);
                                  $$payload.out += `${anchor_16}`;
                                  if ($$sanitized_props.icon.toLowerCase() == "burger") {
                                    $$payload.out += "<!--ssr:if:true-->";
                                    $$payload.out += `<svg${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
                                  } else {
                                    $$payload.out += "<!--ssr:if:false-->";
                                    const anchor_17 = create_anchor($$payload);
                                    $$payload.out += `${anchor_17}`;
                                    if ($$sanitized_props.icon.toLowerCase() == "cross") {
                                      $$payload.out += "<!--ssr:if:true-->";
                                      $$payload.out += `<svg viewBox="0 0 10 10"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="currentColor"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke-width="1" stroke-linecap="round"></path></svg>`;
                                    } else {
                                      $$payload.out += "<!--ssr:if:false-->";
                                      const anchor_18 = create_anchor($$payload);
                                      $$payload.out += `${anchor_18}`;
                                      if ($$sanitized_props.icon.toLowerCase() == "safety") {
                                        $$payload.out += "<!--ssr:if:true-->";
                                        $$payload.out += `<svg viewBox="0 0 24 24"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>safety_certificate_line</title><g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="System" transform="translate(-430.000000, -192.000000)" fill-rule="nonzero"><g id="safety_certificate_line" transform="translate(430.000000, 192.000000)"><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"></path><path d="M11.2978,2.19533 C11.6939125,2.0467725 12.1254734,2.02820281 12.530448,2.13962094 L12.7022,2.19533 L19.7022,4.82033 C20.4308533,5.09354467 20.9298818,5.76181693 20.9931804,6.52752646 L21,6.69299 L21,12.0557 C21,15.3644353 19.185628,18.397435 16.2910032,19.9669788 L16.0249,20.1056 L12.6708,21.7826 C12.2954222,21.9703333 11.8610222,21.9911926 11.4725284,21.8451778 L11.3292,21.7826 L7.97508,20.1056 C5.01569824,18.6258412 3.11426678,15.6466349 3.00497789,12.3557015 L3,12.0557 L3,6.69299 C3,5.91487933 3.45049511,5.21294733 4.14521784,4.88481434 L4.29775,4.82033 L11.2978,2.19533 Z M12,4.06799 L5,6.69299 L5,12.0557 C5,14.61872 6.39981647,16.9691539 8.63528667,18.1940401 L8.8695,18.3167 L12,19.882 L15.1305,18.3167 C17.42295,17.1705233 18.8991628,14.8673176 18.9950298,12.3200442 L19,12.0557 L19,6.69299 L12,4.06799 Z M15.4329,8.62909 C15.8235,8.23856 16.4566,8.23856 16.8471,8.62909 C17.2076538,8.98957 17.2353888,9.55680503 16.9303047,9.9490935 L16.8471,10.0433 L11.6127,15.2778 C11.2137857,15.6767143 10.5847383,15.7052082 10.1529478,15.3632816 L10.057,15.2778 L7.65285,12.8736 C7.26233,12.4831 7.26233,11.8499 7.65285,11.4594 C8.01333923,11.0989385 8.58056645,11.0712107 8.97286152,11.3762166 L9.06707,11.4594 L10.8348,13.2272 L15.4329,8.62909 Z" id="形状" fill="currentColor"></path></g></g></g></g></svg>`;
                                      } else {
                                        $$payload.out += "<!--ssr:if:false-->";
                                        const anchor_19 = create_anchor($$payload);
                                        $$payload.out += `${anchor_19}`;
                                        if ($$sanitized_props.icon.toLowerCase() == "design") {
                                          $$payload.out += "<!--ssr:if:true-->";
                                          $$payload.out += `<svg version="1.1" id="DESIGN" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" xml:space="preserve"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Layer"><g><path fill="currentColor" d="M1541.606,1540.146l0.009-0.008c35.598-35.594,35.598-93.52,0-129.121 c-17.24-17.236-40.178-26.745-64.569-26.745c-24.378,0-47.314,9.509-64.564,26.763c-35.588,35.584-35.588,93.51,0.009,129.104 C1448.096,1575.73,1506.014,1575.73,1541.606,1540.146z M1440.885,1511.743c-9.656-9.655-14.975-22.498-14.975-36.165 c0-13.659,5.318-26.511,14.975-36.167c9.665-9.655,22.512-14.979,36.175-14.979c13.659,0,26.497,5.323,36.161,14.979 c19.938,19.945,19.938,52.387-0.008,72.332C1493.271,1531.689,1460.831,1531.681,1440.885,1511.743z"></path><path fill="currentColor" d="M1700.934,402.736c0.021-0.026,0.047-0.043,0.068-0.065c0.044-0.043,0.083-0.091,0.127-0.134l5.504-5.505 l-0.138-0.139c81.836-87.814,80.038-225.814-5.507-311.356c-42.353-42.357-98.664-65.685-158.565-65.685 c-57.228,0-111.154,21.339-152.792,60.18l-0.134-0.134l-5.511,5.507c-0.043,0.046-0.09,0.085-0.134,0.131 c-0.021,0.021-0.039,0.045-0.061,0.069L66.371,1403.02l0.513,0.513c-7.364,4.749-12.699,12.548-13.98,21.907L9.578,1741.903 c-1.319,9.647,1.95,19.347,8.831,26.232c5.875,5.87,13.807,9.108,22.004,9.108c1.402,0,2.813-0.095,4.224-0.286l316.451-43.338 c9.365-1.276,17.163-6.617,21.912-13.98l0.512,0.513L1700.934,402.736z M1542.423,82.094c43.272,0,83.954,16.852,114.551,47.452 c55.643,55.638,62.276,142.02,19.897,204.983L1451.973,109.64C1478.482,91.724,1509.717,82.094,1542.423,82.094z M1389.497,167.919l229.113,229.112L383.512,1632.129l-86.195-86.19l991.423-991.409l-59.351-59.342l-991.41,991.418 l-83.585-83.586L1389.497,167.919z M76.804,1709.731l35.68-260.604l224.915,224.916L76.804,1709.731z"></path><path fill="currentColor" d="M506.941,804.479l56.789-56.789l-454.446-454.45l185.432-185.437l87.924,87.932l-63.792,63.783 l50.362,50.359l63.792-63.779l51.262,51.258l-63.792,63.788l50.363,50.354l63.797-63.779l51.257,51.267l-94.375,94.353 l50.376,50.363l94.362-94.362l62.502,62.498l-63.792,63.801l50.363,50.354l63.792-63.792l0.043,0.047l56.789-56.789 L323.106,22.622c-15.682-15.686-41.102-15.686-56.784,0L24.102,264.845c-15.687,15.683-15.687,41.107,0,56.789L506.941,804.479z"></path><path fill="currentColor" d="M1778.944,1478.287c-0.726-0.729-1.478-1.424-2.241-2.085l-505.282-505.273l-151.159,151.159l50.259,50.26 l94.371-94.37l428.79,428.782l-185.441,185.432l-479.045-479.041l-56.789,56.798l507.437,507.427 c15.682,15.69,41.102,15.69,56.788,0l242.234-242.213c0.021-0.034,0.048-0.052,0.079-0.086 C1794.63,1519.402,1794.63,1493.969,1778.944,1478.287z"></path></g></g></g></svg>`;
                                        } else {
                                          $$payload.out += "<!--ssr:if:false-->";
                                          const anchor_20 = create_anchor($$payload);
                                          $$payload.out += `${anchor_20}`;
                                          if ($$sanitized_props.icon.toLowerCase() == "repair") {
                                            $$payload.out += "<!--ssr:if:true-->";
                                            $$payload.out += `<svg${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M187.698 120.105c41.846-15.492 89.309-5.554 121.432 26.561 44.941 44.941 44.941 117.826-.002 162.769-44.953 44.953-117.828 44.953-162.781 0-32.25-32.25-42.125-79.975-26.367-121.934 3.977-10.589-1.383-22.396-11.972-26.373s-22.396 1.383-26.373 11.972c-21.357 56.869-7.968 121.581 35.749 165.298 60.949 60.949 159.758 60.949 220.707 0 60.939-60.939 60.939-159.758 0-220.697-43.541-43.53-107.898-57.005-164.614-36.008-10.607 3.927-16.023 15.709-12.096 26.316s15.709 16.023 26.316 12.096z"></path><path d="M161.408 118.082l52.879 52.869c4.331 4.334 4.331 11.381-.001 15.713l-27.924 27.924c-4.341 4.341-11.373 4.341-15.714 0l-52.594-52.584c-7.999-7.997-20.966-7.996-28.963.003s-7.996 20.966.003 28.963l52.593 52.582c20.336 20.336 53.302 20.336 73.639-.001l27.924-27.924c20.326-20.326 20.326-53.297.006-73.634l-52.887-52.877c-7.999-7.997-20.966-7.996-28.963.003s-7.996 20.966.003 28.963zM836.42 904.635c-41.846 15.492-89.309 5.554-121.432-26.561-44.941-44.941-44.941-117.826.002-162.769 44.953-44.953 117.828-44.953 162.781 0 32.25 32.25 42.125 79.975 26.367 121.934-3.977 10.589 1.383 22.396 11.972 26.373s22.396-1.383 26.373-11.972c21.357-56.869 7.968-121.581-35.749-165.298-60.949-60.949-159.758-60.949-220.707 0-60.939 60.939-60.939 159.758 0 220.697 43.541 43.53 107.898 57.005 164.614 36.008 10.607-3.927 16.023-15.709 12.096-26.316s-15.709-16.023-26.316-12.096z"></path><path d="M862.712 906.659l-52.869-52.869c-4.34-4.34-4.34-11.377-.006-15.708l27.923-27.933c4.339-4.339 11.37-4.339 15.711.003l52.594 52.584c7.999 7.997 20.966 7.996 28.963-.003s7.996-20.966-.003-28.963l-52.593-52.582c-20.336-20.336-53.302-20.336-73.639.001l-27.917 27.927c-20.335 20.319-20.335 53.299.003 73.638l52.869 52.869c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM674.469 738.186l-391.26-391.26c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963l391.26 391.26c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM343.768 279.258l400.374 400.374c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963L372.731 250.295c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963zm255.917 112.52l176.732-176.732c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0L570.722 362.815c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0zm214.393-149.914L631.53 422.641c-8.037 7.959-8.1 20.926-.141 28.963s20.926 8.1 28.963.141L842.9 270.968c8.037-7.959 8.1-20.926.141-28.963s-20.926-8.1-28.963-.141z"></path><path d="M945.721 131.005a20.48 20.48 0 014.873 21.176l-28.201 81.531a20.481 20.481 0 01-12.659 12.66l-81.541 28.211a20.48 20.48 0 01-21.179-4.874l-53.32-53.33a20.48 20.48 0 01-4.872-21.175l28.201-81.531a20.478 20.478 0 0112.658-12.659l81.531-28.211a20.478 20.478 0 0121.178 4.873l53.33 53.33zm-73.228-15.302l-60.012 20.765-20.758 60.014 35.194 35.201 60.021-20.766 20.758-60.012-35.202-35.202zm-421.165 544.57L208.763 902.838c-7.497 7.497-16.502 8.466-19.734 5.237l-74.541-74.541c-3.223-3.226-2.254-12.226 5.248-19.733l242.089-242.079c7.998-7.998 7.998-20.965.001-28.963s-20.965-7.998-28.963-.001L90.769 784.842c-22.28 22.295-26.003 56.877-5.249 77.648l74.553 74.553c20.778 20.76 55.375 17.036 77.654-5.243l242.565-242.565c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0z"></path></g></svg>`;
                                          } else {
                                            $$payload.out += "<!--ssr:if:false-->";
                                            const anchor_21 = create_anchor($$payload);
                                            $$payload.out += `${anchor_21}`;
                                            if ($$sanitized_props.icon.toLowerCase() == "construction") {
                                              $$payload.out += "<!--ssr:if:true-->";
                                              $$payload.out += `<svg viewBox="0 0 24 24"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 17.25L15.75 17.25L15.75 15L19.5 15L19.5 17.25ZM19.5 13.5L19.5 9.75L15.75 9.75L15.75 6L10.5 6L9 6L4.5 6L4.5 9.75L3 9.75L3 15L4.5 15L4.5 18.75L9 18.75L10.5 18.75L14.25 18.75L15.75 18.75L21 18.75L21 13.5L19.5 13.5ZM18 13.5L18 11.25L15.75 11.25L14.25 11.25L14.25 13.5L15.75 13.5L18 13.5ZM14.25 15L12.75 15L10.5 15L10.5 17.25L14.25 17.25L14.25 15ZM12.75 11.25L12.75 13.5L9 13.5L9 11.25L10.5 11.25L12.75 11.25ZM9 15L9 17.25L6 17.25L6 15L9 15ZM14.25 7.5L10.5 7.5L10.5 9.75L14.25 9.75L14.25 7.5ZM4.5 11.25L4.5 13.5L7.5 13.5L7.5 11.25L4.5 11.25ZM6 9.75L9 9.75L9 7.5L6 7.5L6 9.75Z" fill="currentColor"></path></g></svg>`;
                                            } else {
                                              $$payload.out += "<!--ssr:if:false-->";
                                              const anchor_22 = create_anchor($$payload);
                                              $$payload.out += `${anchor_22}`;
                                              if ($$sanitized_props.icon.toLowerCase() == "maintenance") {
                                                $$payload.out += "<!--ssr:if:true-->";
                                                $$payload.out += `<svg viewBox="0 0 24 24"${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} fill="transparent" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
                                              } else {
                                                $$payload.out += "<!--ssr:if:false-->";
                                                const anchor_23 = create_anchor($$payload);
                                                $$payload.out += `${anchor_23}`;
                                                if ($$sanitized_props.icon.toLowerCase() == "quotation-mark") {
                                                  $$payload.out += "<!--ssr:if:true-->";
                                                  $$payload.out += `<svg${attr("width", $$sanitized_props.width, false)}${attr("height", $$sanitized_props.height, false)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14"><path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"></path></svg>`;
                                                } else {
                                                  $$payload.out += "<!--ssr:if:false-->";
                                                  $$payload.out += `'icon' not given...`;
                                                }
                                                $$payload.out += `${anchor_23}`;
                                              }
                                              $$payload.out += `${anchor_22}`;
                                            }
                                            $$payload.out += `${anchor_21}`;
                                          }
                                          $$payload.out += `${anchor_20}`;
                                        }
                                        $$payload.out += `${anchor_19}`;
                                      }
                                      $$payload.out += `${anchor_18}`;
                                    }
                                    $$payload.out += `${anchor_17}`;
                                  }
                                  $$payload.out += `${anchor_16}`;
                                }
                                $$payload.out += `${anchor_15}`;
                              }
                              $$payload.out += `${anchor_14}`;
                            }
                            $$payload.out += `${anchor_13}`;
                          }
                          $$payload.out += `${anchor_12}`;
                        }
                        $$payload.out += `${anchor_11}`;
                      }
                      $$payload.out += `${anchor_10}`;
                    }
                    $$payload.out += `${anchor_9}`;
                  }
                  $$payload.out += `${anchor_8}`;
                }
                $$payload.out += `${anchor_7}`;
              }
              $$payload.out += `${anchor_6}`;
            }
            $$payload.out += `${anchor_5}`;
          }
          $$payload.out += `${anchor_4}`;
        }
        $$payload.out += `${anchor_3}`;
      }
      $$payload.out += `${anchor_2}`;
    }
    $$payload.out += `${anchor_1}`;
  }
  $$payload.out += `${anchor}</div>`;
  pop();
}
export {
  Icon as I
};
