import { updateItemInDocument } from "./common.js";
import {
  contentString,
  educationString,
  experienceSting,
  papersString,
  projectsString,
} from "./components.js";

export const handleRoute = (event) => {
  event = event || window.event;
  event?.preventDefault();
  const path = event?.currentTarget.getAttribute("href") || "/";
  window.location.hash = path;
  handleLocation();
};

const routeComponentsMap = {
  404: "nothing",
  "/": projectsString,
  "/experience": experienceSting,
  "/education": educationString,
  "/content": contentString,
  "/papers": papersString,
};

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", "") || "/";
  const component = routeComponentsMap[path] || routeComponentsMap[404];
  updateItemInDocument(".page-content", component);

  if (path === "/content") {
    const existingScript = document.querySelector(
      'script[src="https://embed.reddit.com/widgets.js"]',
    );
    if (existingScript) {
      existingScript.remove();
    }
    const newScript = document.createElement("script");
    newScript.src = "https://embed.reddit.com/widgets.js";
    newScript.async = true;
    newScript.charset = "UTF-8";
    document.body.appendChild(newScript);
  }

  const tabs = document.querySelectorAll(".pages-tabs a");
  tabs.forEach((tab) => {
    const tabPath = tab.getAttribute("href");
    if (tabPath === path || tabPath === `#${path}`) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
};
