export const colors = {
  primary: "#001180",
  black: "#222222",
  blackSecondary: "#424242",
  blackTertiary: "#636363",
  borderColor: "#e6e6e6",
};

export const stars = 9;

export const navItemsArray = [
  {
    name: "Mail",
    path: "mailto:prathampatankar1234@gmail.com?subject=Inquiry%20Regarding%20Software%20Development%20Work&body=Hi%20i%20came%20across%20your%20website%20i%20am%20interested%20to%20talk%20to%20you%20about%20",
  },
  {
    name: "Resume",
    path: "https://drive.google.com/file/d/17zvWXFMbFo-ZmLvTESTRWwB3DXDvP8Nb/view?usp=sharing",
  },
];

export const roles = ["Full Stack Developer", "Tinkerer", "Designer"];

export const pages = [
  {
    title: "Projects",
    path: "/",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Education",
    path: "/education",
  },
  {
    title: "Content",
    path: "/content",
  },
  {
    title: "Papers",
    path: "/papers",
  },
];

export const projects = [
  {
    name: "Made in Vikhroli",
    descriptionPoints: [
      "Made Digital Products E-commerce platform using Remix, Express and D1 db and R2 object storage",
      `Created, integrated and open-sourced <a href="https://miv-pay.vercel.app/" class="mention">@miv-pay</a>: a from-scratch, peer-to-peer payment gateway like solution that generates cryptographically signed payment links. Instead of UPI deep links (which are blocked for unverified merchants), it renders a dynamic UPI QR with a "Share QR Code" option for mobile to share qr code image to upi app to trigger payment. Customers enter their UTR, which is passed back to the store via postMessage and sent to the owner on WhatsApp or email via customer only by single click for easy verification. Integrated into this project as its checkout`,
    ],
    repo_url: "https://github.com/madeinvikhroli/madeinvikhroli",
    deployed_url: "https://madeinvikhroli.vercel.app",
    techStack: ["Remix", "Express", "D1", "R2", "Zustand", "Zod"],
    status: "wip",
  },
  {
    name: "Miv Pay",
    descriptionPoints: [
      "A lightweight, open-source, peer-to-peer payment gateway like solution that generates and verifies cryptographically signed UPI payment links. It works around the restrictions that block standard UPI deep links for unverified merchants",
      'When a link is opened, it renders a dynamic UPI QR code with the amount prefilled. On desktop the customer scans it, and on mobile a "Share QR Code" option sends the QR image straight to their UPI app, so merchants need no verification',
      'Customers enter the 12-digit UTR after paying and tap a single "Confirm Payment" button. It passes the UTR back to the store\'s checkout tab via postMessage and opens WhatsApp or email with a prefilled message, so the owner can verify the payment in their bank app',
      "Exposes simple generate-link and verify-link REST APIs, so any e-commerce site can plug it in as a custom payment gateway.",
    ],
    repo_url: "https://github.com/praxham/miv-pay",
    deployed_url: "https://miv-pay.vercel.app",
    techStack: ["Remix", "Zustand", "Zod"],
    status: "live",
  },
  {
    name: "Samanarthi Search",
    descriptionPoints: [
      `Samanarthi means "similar word" in Marathi. It's a curated search engine that uses in-browser vector search to surface human-picked links for niche, under-represented or "unsearchable" topics that mainstream search and LLMs handle poorly.`,
      `Traditional search matches keywords, and LLMs rely on what they were trained on, so neither can reliably find poorly documented answers buried under popular results. Take a query like "turn 15 inch laptop into 14 inch": search engines return display-settings videos, and LLMs often just say it's impossible. Samanarthi matches on meaning against links that humans have curated and moderated, so it finds the real solution. It isn't trying to replace search engines, only to fill the gaps where they fail.`,
      `It also helps with topics where the words people search with differ from the words media and institutions use. For example, male survivors of sexual abuse by women are rarely described in those terms, and coverage tends to use phrases like "made to penetrate" or "sexually victimised by women". Semantic matching connects the plain-language query to those hidden results.`,
      `Built with React and Tailwind, with Postgres (pgLite) and pgVector running fully in the browser, so there's no backend to host. Embeddings for new links are generated on my own machine once a month and shipped as pre-embedded data, so the database initializes in under a second and searches run in the browser.`,
    ],
    repo_url: "https://github.com/praxham/samanarthi-search",
    deployed_url: "https://samanarthi-search.vercel.app/",
    techStack: ["React", "Tailwind", "pgLite", "pgVector"],
    status: "live",
  },
  {
    name: "WebTV (v2)",
    descriptionPoints: [
      "A big-screen, couch-friendly launcher for HTPCs and living room PCs, inspired by Apple tvOS and modern streaming-box home screens. It runs as a fullscreen website, so it works anywhere a browser does",
      "Navigable with a TV remote or gamepad using spatial navigation (Norigin). Apps launch by running shell commands configured in a single JSON file, and it can start Chromium in kiosk mode on a living room PC",
      "Fully themeable: the UI is React and Tailwind CSS, so layouts, colors, fonts and animations can be restyled freely. It's open source with 9 GitHub stars, easy to set up (clone, `npm install`, `npm run start`) and runs on Linux or macOS",
      "Built it to use a PC monitor as a TV, since monitors usually have better image quality than traditional TVs",
    ],
    repo_url: "https://github.com/praxham/WebTV",
    deployed_url: "https://web-tvv.vercel.app/",
    techStack: ["React", "Tailwind", "Zustand", "Bun"],
    status: "live",
  },
  {
    name: "Calc 2 Pay",
    descriptionPoints: [
      "It does exactly what it says, In malls and large stores they have payment device which generates the dynamic QR with amount integrated in it so customers can simply scan and pay exact amount, calc2pay tries to bring same functionality for small grocery shop owners or literally any shop owner to generate dynamic QR codes with amount just like the big stores are able to do it with POS payment machines",
      `shopkeepers enter their UPI ID once, after that they just calculate the total amount and generate UPI QR code with that amount so customers can scan the QR
      they're shown payment option in their UPI app with total amount prefilled so they can pay easily, No account creation nothing, the UPI ID users entered is stored locally on user's device, no data ever leaves user's device`,
      "It reduces the hassle of calculating total on calculator saying the amount out loud to customer manually types it in and pays, sometimes due to miscommunication, the customer ends up paying the wrong amount",
      `shopkeepers can also share the generated qr via whatsapp or any other app it is shared as payment link generated using <a href="https://miv-pay.vercel.app/" class="mention">@miv-pay</a>`,
    ],
    repo_url: "https://github.com/praxham/calc2pay",
    deployed_url: "https://calc2pay.vercel.app",
    techStack: ["React", "Tailwind"],
    status: "live",
  },
  {
    name: "Pincode Base Address",
    descriptionPoints: [
      'Generates base address from any Indian pincode, eg: from 400083, generates "Kannamwar Nagar, Mumbai-400083, Maharashtra, India"',
      "Useful for any websites where they want user's location details but users have to fill in pincode, city, state, country — and then manually fill their address too, which ends up containing the same fields again, using base address generator you'd only need two fields one for pincode and one for address",
      "When user enters pincode first, city, state, country auto filled under the hood and also base address generator generates base address, developer can add that in address field with ability for users to edit it like adding apartment number, wing, room number etc in beginning",
    ],
    repo_url: "https://github.com/praxham/pincode-base-address",
    deployed_url: "https://pincode-base-address.vercel.app",
    techStack: ["Hono", "Typescript", "Bun"],
    status: "live",
  },
  {
    name: "ShareDocs",
    descriptionPoints: [
      "Store your Google Drive document links which you frequently need in one place and easily send it to printer shop guy with WhatsApp",
      "no juggling multiple apps - saving printer shop number just to find it in WhatsApp later, just add drive document links once when user wants to share to print shop they open it, click on share button and enter WhatsApp number of print shop and hit send",
      'document links are perfectly labelled and indexed in formatted text message and sent to the printer shop, user just have to say "oh print all of the documents/ print first and fourth one"',
    ],
    repo_url: "https://github.com/praxham/ShareDocs",
    deployed_url: "https://sharepdfs.vercel.app/",
    techStack: ["React", "Tailwind"],
    status: "live",
  },
  {
    name: "Lightbar",
    descriptionPoints: [
      "Made digital lightbar which appears on screen on top of all apps to illuminate keyboard at night",
      "I wanted lightbar to illuminate keyboard but they cost so much for simply being light source attached to a monitor",
    ],
    repo_url: "https://github.com/praxham/lightbar",
    deployed_url: null,
    techStack: ["Shell", "Python"],
    status: "live",
  },
  {
    name: "A Min Ago",
    descriptionPoints: [
      "As the name suggests a min ago records the video of past one minute, it does so by constantly recording minute long clips and trashing them, if user clicks record, it saves the last clip of a minute",
      "Useful for capturing unexpected events like lightning or accidents",
    ],
    repo_url: "https://github.com/praxham/a-min-ago",
    deployed_url: "https://aminago.vercel.app",
    techStack: ["React", "Tailwind"],
    status: "live",
  },
  {
    name: "Finding Electromagntic Field",
    descriptionPoints: [
      "An EMF Detector website works with inductor mic to identify intensity and direction using ML model of the EMF Field",
      "Inductor Mic is inductor connected to male headphone jack, it detects changing magnetic fields (EMF) and converts them to audio signal",
      "Made this to spread awareness about EMF, to show we are all surrounded by it and it's safe",
    ],
    repo_url: "https://github.com/praxham/findingelectromagnticfield",
    deployed_url: "https://praxham.github.io/findingelectromagnticfield/",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];

export const experience = [
  {
    name: "Tech Lead <a href='https://quvor.com/' class='mention'>@caterersnearme</a>",
    descriptionPoints: [
      "Architected and delivered an end-to-end referral system: designed the MongoDB schema, built NestJS services with DTOs and validation pipelines, and implemented atomic reward and coupon distribution at record creation",
      "Built ad lead-generation forms that let ad audiences experience the website's functionality within seconds. Simplified the features, removed unnecessary form fields, and derived richer, more granular user data from the minimal input users provide",
      "Built a custom order configuration feature that lets admins set entity-level custom pricing, JWT-tokenized and embedded in shareable links for tamper-proof, end-to-end pricing integrity",
      "Developed internal automation scripts: a bulk Excel-to-API data ingestion tool, a multi-page HTML form auto-fill script, and a database repair script that fixes inconsistent records at scale",
    ],
    techStack: ["Next.js", "React Native", "Nest.js", "Mongo DB"],
    startingMonthAndYear: "April 2026",
    endingMonthAndYear: "June 2026",
    location: "Mumbai, India",
  },
  {
    name: "Full Stack Developer <a href='https://quvor.com/' class='mention'>@quvor</a>",
    descriptionPoints: [
      "Built end-to-end key features for a community platform using React Router v7 and Mantine UI, Implemented server-side data logic using React Router loaders and actions, aggregating and transforming data across multiple Directus collections to power the UI.",
      "Audited design and functionality across multiple platform modules, worked with QA, UX and backend teams to document and fix pre-existing UI bugs",
      "Improved codebase maintainability by refactoring high-complexity pages, extracting reusable components, simplifying the code logic, improving readability of code",
    ],
    techStack: ["React Router v7", "Mantine UI"],
    startingMonthAndYear: "September 2025",
    endingMonthAndYear: "March 2026",
    location: "Remote",
  },
  {
    name: "Frontend Developer <a href='https://naayatrade.com/' class='mention'>@naayatrade</a>",
    descriptionPoints: [
      "Developed a responsive B2B marketplace platform with dynamic buyer/seller dashboards, real-time order management, and secure payment workflows using React.js and Node.js.",
      "Built AI-powered internal sales automation tool that reduced manual processing time by 50%, integrating dynamic storefronts, product catalog management, and inventory control systems",
      "Translated 80+ high-fidelity Figma designs into production-ready, mobile-first landing pages for B2B SaaS platforms, achieving design accuracy and improved page load speeds",
      "Created Node.js scripts for Excel-to-database conversion and frontend JavaScript tools enabling admins to auto-populate product upload forms, while integrating 50+ internal and third-party APIs",
    ],
    techStack: [
      "React",
      "Tailwind",
      "Laravel (PHP)",
      "MySQL",
      "Express",
      "AWS",
    ],
    startingMonthAndYear: "March 2024",
    endingMonthAndYear: "July 2025",
    location: "Mumbai, India",
    currentlyWorkingHere: false,
  },
];

export const education = [
  {
    name: 'Master of Science in I.T. from <a href="https://alsj.bunts.edu.in/" class="mention">@anna-leela</a> (MU)',
    descriptionPoints: [
      "Did final year research paper on Implementation of ML based single mic sound localization",
      "Had the opportunity to learn about advanced programming concepts, ML-AI Theory and Implenetation",
      "The faculty and professors were very helpful and knowledgeable regarding college work, projects and research",
      "Oh and many people don't know about this college, it's the sister college of famous S.M. Shetty college under the same Bunts Sangha organization",
    ],
    techStack: ["Python", "Java", "Machine Learning", "Data Science"],
    startingMonthAndYear: "September 2022",
    endingMonthAndYear: "June 2025",
    cgpi: 7.21,
  },
  {
    name: 'Bachelor of Science in I.T. from <a href="https://siddharthcollege.edu.in/" class="mention">@siddharth</a> (MU)',
    descriptionPoints: [
      "Did final year project on using hardware-website combination to detect and visualize EMF, using inductor as mic connected to male headphone jack",
      "Had the opportunity to learn from amazing professors not just curriculum but also industry standards and new tech",
      "Oh and many people don't know about this college, it was founded by Ambedkar and one of the oldest colleges from mumbai",
    ],
    techStack: ["HTML", "CSS", "Javascript", "Programming Concepts"],
    startingMonthAndYear: "September 2019",
    endingMonthAndYear: "April 2022",
    cgpi: 8.52,
  },
];

export const redditUserUrl = "https://www.reddit.com/user/praxham/";

export const content = [
  {
    url: "https://dev.to/praxham/ive-made-upi-deep-link-replacement-for-individual-use-33h",
    bannerImageUrl:
      "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fk9j8zavfqeqvsoh0yhwi.png",
    postTitle: "Ive made upi deep link replacement for individual use",
    userName: "praxham",
    medium: "dev.to",
  },
  {
    url: "https://dev.to/praxham/i-made-search-engine-to-search-unsearchable-topics-2g4a",
    bannerImageUrl:
      "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fgu5yebu2axtb3aucj7pw.png",
    postTitle: "I made search engine to search unsearchable topics",
    userName: "praxham",
    medium: "dev.to",
  },
  {
    url: "https://dev.to/praxham/webtv-a-living-room-launcher-for-your-htpc-built-as-a-website-1g6a",
    bannerImageUrl:
      "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fjsd93sxqpkhu7h1pq7oz.png",
    postTitle:
      "WebTV: A living-room launcher for your HTPC, built as a website.",
    userName: "praxham",
    medium: "dev.to",
  },
  {
    url: "https://dev.to/praxham/i-made-a-simple-screen-wide-lightbar-overlay-for-linux-3kp9",
    bannerImageUrl:
      "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fnwbbrn46iy9d6ndsj7kc.png",
    postTitle: "I made a simple screen-wide lightbar overlay for Linux",
    userName: "praxham",
    medium: "dev.to",
  },
  {
    url: "https://dev.to/praxham/made-api-which-generates-base-address-from-any-indian-pincode-nb7",
    postTitle: "Made api which generates base address from any indian pincode",
    userName: "praxham",
    medium: "dev.to",
  },
  {
    url: "https://www.reddit.com/r/htpc/comments/18mn14o/webtv_a_googletv_like_ui_on_web/",
    subredditUrl: "https://www.reddit.com/r/htpc/",
    postTitle: "WebTV a GoogleTV like UI on Web",
    userName: "prathampatankar",
    subredditName: "htpc",
    medium: "reddit",
  },
  {
    url: "https://www.reddit.com/r/SamsungDex/comments/18i6rr1/desktop_mode_on_budget_android_devices_but_theres/",
    subredditUrl: "https://www.reddit.com/r/SamsungDex/",
    postTitle: "Desktop Mode on Budget Android devices, but there's an issue..",
    userName: "prathampatankar",
    subredditName: "SamsungDex",
    medium: "reddit",
  },
  {
    url: "https://www.reddit.com/r/SamsungDex/comments/18ir5uw/got_it_working_on_m13/",
    subredditUrl: "https://www.reddit.com/r/SamsungDex/",
    postTitle: "Got it working on M13",
    userName: "prathampatankar",
    subredditName: "SamsungDex",
    medium: "reddit",
  },
];

export const papers = [
  {
    name: "Serverless Peer to Peer Payment Gateway - 2026",
    descriptionPoints: [
      "Proposes a decentralized, serverless architecture that circumvents current UPI deep-link restrictions for unverified merchants through the generation of cryptographically signed payment URLs and dynamic QR payloads.",
      "Introduces a secure cross-origin state synchronization mechanism utilizing the 'window.postMessage' API to securely route the 12-digit Unique Transaction Reference (UTR) from the isolated payment environment back to the merchant's primary e-commerce origin.",
      "Implements an out-of-band transaction verification protocol by programmatically invoking native communication clients (via 'mailto:' and 'wa.me' URI schemes), facilitating a seamless human-in-the-loop notification system for final settlement validation.",
    ],
    techStack: ["upi deeplink", "window.postMessage", "mailto", "wa.me"],
    deployed_url: "https://praxham.github.io/miv-pay/",
  },
  {
    name: "Spread of Marathi Language on Internet - 2022",
    descriptionPoints: [
      "This research paper is about the study of spread of Marathi language on the internet, how it happened and what factors lead to it.",
      `Currently, we can see Marathi being the 2nd most popular language just after Hindi but no one knows how it happened, there is no well-written research paper available that explains how Marathi language became popular on the Internet.`,
      "This research paper is made after a detailed analysis of data from multiple sources like Google Trends, non-Marathi native speakers’ responses on the internet, and survey data.",
    ],
    techStack: ["Google Trends"],
    deployed_url:
      "https://drive.google.com/file/d/1kNO_91e1Sjmq2ozSv6Rje2bms67QErD4/view?usp=sharing",
  },
  {
    name: "Machine Learning Based Single Microphone Sound Localization - 2024",
    descriptionPoints: [
      "This paper explores single-microphone sound localization using a machine learning model.",
      `Trained on Google's Teachable Machine to differentiate "right" and "left" sources`,
      "the model achieves 70% accuracy, demonstrating the potential of ML for cost-effective sound source localization with a single microphone.",
    ],
    techStack: ["Google's Teachable Machine"],
    deployed_url:
      "https://drive.google.com/file/d/1RlNwgbYVILwM2eIACjTtX4_Oy79lSPH8/view",
  },
  {
    name: "Machine Learning Based Electromagnetic Field Detector Website (Project Report) - 2024",
    descriptionPoints: [
      "This is masters final year project report for EMF Detector website which detects emf using inductor mic which is made simply using inductor and male headphone jack",
      "Websites takes input from this mic and using trained ML model it identifies* the direction of EMF source",
      "It aims to create awareness about EMF we are all surrounded by it we can visualise it and its safe",
    ],
    techStack: ["p5.js"],
    deployed_url:
      "https://drive.google.com/file/d/1h5oI40Jtm_BglQH92aM5L1fnMq-hkqdQ/view",
    repo_url: "https://github.com/praxham/findingelectromagnticfield",
  },
];
