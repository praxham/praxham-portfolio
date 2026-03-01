export const html = String.raw;

export const updateItemInDocument = (selector, updateWith) => {
  const selectedItem = document.querySelector(selector);

  if (selectedItem) {
    selectedItem.innerHTML = String(updateWith);
  } else {
    console.error(`Element not found for selector: ${selector}`);
  }
};

const monthName = new Date().toLocaleString("default", { month: "long" });
const yearName = new Date().toLocaleString("default", { year: "numeric" });
export const currentMonthYear = monthName + " " + yearName;
