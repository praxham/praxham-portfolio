export const html = String.raw;

export const processExternalLinks = (element = document) => {
  const links = element.querySelectorAll('a[href^="http"]');
  links.forEach((link) => {
    if (!link.getAttribute("target")) {
      link.setAttribute("target", "_blank");
    }
    if (!link.getAttribute("rel")) {
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
};

export const updateItemInDocument = (selector, updateWith) => {
  const selectedItem = document.querySelector(selector);

  if (selectedItem) {
    selectedItem.innerHTML = String(updateWith);
    processExternalLinks(selectedItem);
  } else {
    console.error(`Element not found for selector: ${selector}`);
  }
};

const monthName = new Date().toLocaleString("default", { month: "long" });
const yearName = new Date().toLocaleString("default", { year: "numeric" });
export const currentMonthYear = monthName + " " + yearName;
