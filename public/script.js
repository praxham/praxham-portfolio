import {
  updateItemInDocument,
  currentMonthYear,
  html,
  processExternalLinks,
} from "./common.js";
import { navItemsArray, roles, colors, pages, stars } from "./data.js";
import { handleRoute, handleLocation } from "./router.js";

window.route = handleRoute;
window.onpopstate = handleLocation;

// Set theme colors from data.js
Object.entries(colors).forEach(([name, value]) => {
  document.documentElement.style.setProperty(`--${name}-color`, value);
});

const navItemsString = navItemsArray
  .map((item) => `<h2><a href="${item.path}">${item.name}</a></h2>`)
  .join("");

updateItemInDocument(".nav-items-group", navItemsString);

const rolesString = roles.join(" / ");
updateItemInDocument(".roles", rolesString);

const shortDescString = html`
  <p>
    Hi Pratham here from Vikhroli, Mumbai. recently I made
    <a href="https://madeinvikhroli.com" class="mention"
      >@madeinvikhroli</a
    >, which is a small art collective and digital marketplace with custom
    peer-to-peer UPI payment solution
    <a href="https://miv-pay.vercel.app/" class="mention">@miv-pay</a>, a while
    ago I made
    <a href="https://calc2pay.vercel.app/" class="mention">@calc-2-pay</a>,
    where users can calculate total amount and generate UPI QR with that amount
    so customer can scan and pay the prefilled amount in QR
  </p>

  <p>
  I most recently worked as Tech Lead at
  <a href="https://caterersnearme.in" class="mention">@caterersnearme</a>
  (April 2026 - May 2026), where I built their referral system and custom
  order pricing. Before that, I was a Full Stack Developer
    <a href="https://quvor.com/" class="mention">@quvor</a> (September 2025
    - March 2026), building key modules of their b2b community platform, and I 
    also worked as Frontend Developer
    <a href="https://naayatrade.com/" class="mention">@naayatrade</a> (March 2024
  - July 2025), where I made the complete UI and some APIs of their b2b marketplace.
  </p>

  <p>
    I did my BSc.I.T. from
    <a href="https://siddharthcollege.edu.in/" class="mention">@siddharth</a>
    during (2019 - 2022) and I did my MSc.I.T. from
    <a href="https://alsj.bunts.edu.in/" class="mention">@anna-leela</a> during
    (2022 - 2025)
  </p>
`;
updateItemInDocument(".short-desc", shortDescString);

const starsString = html`
  <img src="https://cdn.simpleicons.org/github" width="14" height="14" />
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#e3b341">
    <path
      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.873 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"
    />
  </svg>
  <span>${stars}</span>
`;
updateItemInDocument(".stars", starsString);

const pagesString = pages
  .map(
    (page) =>
      html`<h3>
        <a href="${page.path}" onclick="route(event)">${page.title}</a>
      </h3>`,
  )
  .join("");
updateItemInDocument(".pages-tabs", pagesString);

handleLocation();
processExternalLinks();
