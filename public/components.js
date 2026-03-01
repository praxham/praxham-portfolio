import {
  content,
  education,
  experience,
  papers,
  projects,
  redditUserUrl,
} from "./data.js";
import { currentMonthYear, html } from "./common.js";

const commonCardHtml = ({
  name,
  repo_url,
  deployed_url,
  descriptionPoints,
  techStack,
  startingMonthAndYear,
  endingMonthAndYear,
  location,
  currentlyWorkingHere,
  cgpi,
}) => {
  const cardHtmlString = html`
    <div class="project-card">
      <div class="project-name-n-links">
        <h3>${name}</h3>
        <div class="project-date-wrapper">
          <div class="project-links">
            ${
              deployed_url
                ? `<a href=${deployed_url}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_26_123)">
            <path d="M0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8ZM7.5 1.077C6.83 1.281 6.165 1.897 5.613 2.932C5.43123 3.27614 5.27481 3.63309 5.145 4H7.5V1.077ZM4.09 4C4.25684 3.46888 4.47103 2.95381 4.73 2.461C4.90404 2.13472 5.10367 1.82274 5.327 1.528C4.08815 2.04207 3.02221 2.89981 2.255 4H4.09ZM3.508 7.5C3.538 6.623 3.646 5.782 3.82 5H1.674C1.30205 5.78539 1.07959 6.63317 1.018 7.5H3.508ZM4.847 5C4.65032 5.8198 4.53707 6.6574 4.509 7.5H7.5V5H4.847ZM8.5 5V7.5H11.49C11.4623 6.65743 11.3493 5.81984 11.153 5H8.5ZM4.51 8.5C4.53774 9.34257 4.65065 10.1802 4.847 11H7.5V8.5H4.51ZM8.5 8.5V11H11.153C11.34 10.235 11.459 9.392 11.491 8.5H8.5ZM5.145 12C5.28367 12.3867 5.43967 12.7427 5.613 13.068C6.165 14.103 6.831 14.718 7.5 14.923V12H5.145ZM5.327 14.472C5.10367 14.1773 4.90404 13.8653 4.73 13.539C4.47103 13.0462 4.25684 12.5311 4.09 12H2.255C3.02097 13.1013 4.08728 13.9594 5.327 14.472ZM3.82 11C3.63943 10.178 3.53499 9.34115 3.508 8.5H1.018C1.08 9.39 1.309 10.233 1.674 11H3.82ZM10.673 14.472C11.9127 13.9594 12.979 13.1013 13.745 12H11.91C11.7432 12.5311 11.529 13.0462 11.27 13.539C11.096 13.8653 10.8963 14.1773 10.673 14.472ZM8.5 12V14.923C9.17 14.719 9.835 14.103 10.387 13.068C10.5603 12.7433 10.7163 12.3873 10.855 12H8.5ZM12.18 11H14.326C14.691 10.233 14.92 9.39 14.982 8.5H12.492C12.465 9.34115 12.3606 10.178 12.18 11ZM14.982 7.5C14.9204 6.63317 14.698 5.78539 14.326 5H12.18C12.354 5.782 12.462 6.623 12.492 7.5H14.982ZM11.27 2.461C11.517 2.925 11.732 3.441 11.91 4H13.745C12.979 2.89866 11.9127 2.04061 10.673 1.528C10.891 1.812 11.091 2.126 11.27 2.461ZM10.855 4C10.7252 3.63309 10.5688 3.27614 10.387 2.932C9.835 1.897 9.17 1.282 8.5 1.077V4H10.855Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_26_123">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </a>`
                : ""
            }
            ${
              repo_url
                ? `<a href=${repo_url}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_26_119)">
            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1384 15.0543 13.5187 14.0337 14.4964 12.672C15.4741 11.3104 16 9.67631 16 8C16 3.58 12.42 0 8 0Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_26_119">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </a>`
                : ""
            }
          </div>
          ${startingMonthAndYear ? `<b>${startingMonthAndYear}</b>` : ""}
          ${startingMonthAndYear ? "-" : ""}
          ${
            endingMonthAndYear
              ? `<b>${endingMonthAndYear}</b>`
              : currentlyWorkingHere
                ? `<b>${currentMonthYear}</b>`
                : ""
          }
        </div>
      </div>
      <div class="techstack-n-location-or-cgpi">
        ${
          techStack
            ? `<ul class="tech-stack">
                ${techStack
                  ?.map((item) => `<li class='tech'>${item}</li>`)
                  .join("")}
              </ul>`
            : ""
        }
          <div class='location-or-cgpi'>
          ${location ? `<p>${location}</p>` : ""}
        ${cgpi ? `<p>CGPI: ${cgpi}</p>` : ""}
          </div>
        
      </div>
      ${
        descriptionPoints
          ? `<ul class='description-points'>
            ${descriptionPoints?.map((item) => `<li>${item}</li>`).join("")}
        </ul>`
          : ""
      }
    </div>
  `;
  return cardHtmlString;
};

export const projectsString = projects
  .map(({ name, repo_url, deployed_url, descriptionPoints, techStack }) =>
    commonCardHtml({
      name,
      repo_url,
      deployed_url,
      descriptionPoints,
      techStack,
    }),
  )
  .join("<hr class='line'/>");

export const experienceSting = experience
  .map(
    ({
      name,
      descriptionPoints,
      techStack,
      startingMonthAndYear,
      endingMonthAndYear,
      location,
      currentlyWorkingHere,
    }) =>
      commonCardHtml({
        name,
        descriptionPoints,
        techStack,
        startingMonthAndYear,
        endingMonthAndYear,
        location,
        currentlyWorkingHere,
      }),
  )
  .join("<hr class='line'/>");

export const educationString = education
  .map(
    ({
      name,
      descriptionPoints,
      techStack,
      startingMonthAndYear,
      endingMonthAndYear,
      cgpi,
    }) =>
      commonCardHtml({
        name,
        descriptionPoints,
        techStack,
        startingMonthAndYear,
        endingMonthAndYear,
        cgpi,
      }),
  )
  .join("<hr class='line'/>");

export const contentString = content
  .map(
    ({ url, subredditUrl, postTitle, userName, subredditName }) =>
      html`<blockquote
        class="reddit-embed-bq"
        style="height: 316px"
        data-embed-height="316"
      >
        <a href=${url}>${postTitle}</a><br />
        by
        <a href=${redditUserUrl}>${userName ?? "u/praxham"}</a>
        in
        <a href=${subredditUrl}>${subredditName}</a>
      </blockquote>`,
  )
  .join("<hr class='line'/>");

export const papersString = papers
  .map(({ name, descriptionPoints, techStack, deployed_url, repo_url }) =>
    commonCardHtml({
      name,
      descriptionPoints,
      techStack,
      deployed_url,
      repo_url,
    }),
  )
  .join("<hr class='line'/>");
