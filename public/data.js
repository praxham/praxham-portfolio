export const colors = {
  primary: "#001180",
  black: "#222222",
  blackSecondary: "#424242",
  blackTertiary: "#636363",
  borderColor: "#e6e6e6",
};

export const stars = 3;

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
      "Built a full-stack digital product marketplace with seller dashboards and product management, featuring a \textbf{zero-commission UPI payment system} that needs no payment gateway (Razorpay etc.) by generating dynamic per-product UPI links so sellers receive funds directly in their own UPI IDs",
      "Designed a UTR-based payment verification workflow: buyers submit their UTR at checkout to create a pending order, sellers are emailed to confirm the payment, and digital products are \textbf{auto-delivered via email} on confirmation",
    ],
    repo_url: "https://github.com/madeinvikhroli/madeinvikhroli",
    deployed_url: "https://madeinvikhroli.com",
    techStack: ["Remix", "Express", "D1 SQLite", "R2 Object Storage"],
    status: "live",
  },
  {
    name: "Calc 2 Pay",
    descriptionPoints: [
      "It does exactly what it says, In malls and large stores they have payment device which generates the dynamic QR with amount integrated in it so customers can simply scan and pay exact amount, calc2pay tries to bring same functionality for small grocery shop owners or literally any shop owner to generate dynamic QR codes with amount just like the big stores are able to do it with POS payment machines",
      `shopkeepers enter their UPI ID once, after that they just calculate the total amount and generate UPI QR code with that amount so customers can scan the QR
      they're shown payment option in their UPI app with total amount prefilled so they can pay easily, No account creation nothing, the UPI ID users entered is stored locally on user's device, no data ever leaves user's device`,
      "It reduces the hassle of calculating total on calculator saying the amount out loud to customer manually types it in and pays, sometimes due to miscommunication, the customer ends up paying the wrong amount",
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
    name: "WebTV",
    descriptionPoints: [
      "WebTV is Apple tvOS inspired TV interface made for web",
      "It has links to free TV channel providers, OTT providers, and music providers from the start, users can add their own sources via Google Drive, Plex or any other custom URL",
      "Using another third party script/extension you can open desktop apps and TV version of YouTube from this web interface too (more details in readme.md)",
      "Made this because wanted to use pc monitor as tv (since monitors are relatively has higher image quality than traditional TVs), easily navigable with smart TV remote",
    ],
    repo_url: "https://github.com/praxham/WebTV",
    deployed_url: "https://praxham.github.io/WebTV/",
    techStack: ["HTML", "CSS", "Javascript"],
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
    name: "Tech Lead – Software Engineer <a href='https://caterersnearme.in/' class='mention'>@caterersnearme</a>",
    descriptionPoints: [
      "Architected and delivered an end-to-end referral system — designed MongoDB schema, built NestJS services with DTOs and validation pipelines, and implemented atomic reward and coupon distribution logic at record creation",
      "Built a custom order configuration feature for admins to set item-level custom pricing; prices are JWT-tokenized and embedded in shareable links, and tamper-proof end-to-end",
      "Developed internal automation scripts including a bulk data ingestion tool that parsed Excel sheets and called internal APIs, a multi-page html form auto-fill script, and a database repair script to fix inconsistent data",
    ],
    techStack: ["Nest.js", "React Native", "MongoDB"],
    startingMonthAndYear: "April 2026",
    endingMonthAndYear: "May 2026",
    location: "Mumbai, India",
    currentlyWorkingHere: false,
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
    location: "Remote",
    currentlyWorkingHere: true,
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
    url: "https://www.reddit.com/r/developersIndia/comments/1qnkupm/i_made_a_simple_screenwide_lightbar_overlay_for/",
    subredditUrl: "https://www.reddit.com/r/developersIndia/",
    postTitle: "I made a simple screenwide lightbar overlay for",
    userName: "praxham",
    subredditName: "developersIndia",
  },
  {
    url: "https://www.reddit.com/r/developersIndia/comments/1nbrq7c/made_api_which_generates_base_address_from_any/",
    subredditUrl: "https://www.reddit.com/r/developersIndia/",
    postTitle: "Made api which generates base address from any indian pincode",
    userName: "praxham",
    subredditName: "developersIndia",
  },
  {
    url: "https://www.reddit.com/r/htpc/comments/18mn14o/webtv_a_googletv_like_ui_on_web/",
    subredditUrl: "https://www.reddit.com/r/htpc/",
    postTitle: "WebTV a GoogleTV like UI on Web",
    userName: "prathampatankar",
    subredditName: "htpc",
  },
  {
    url: "https://www.reddit.com/r/SamsungDex/comments/18i6rr1/desktop_mode_on_budget_android_devices_but_theres/",
    subredditUrl: "https://www.reddit.com/r/SamsungDex/",
    postTitle: "Desktop Mode on Budget Android devices, but there's an issue..",
    userName: "prathampatankar",
    subredditName: "SamsungDex",
  },
  {
    url: "https://www.reddit.com/r/SamsungDex/comments/18ir5uw/got_it_working_on_m13/",
    subredditUrl: "https://www.reddit.com/r/SamsungDex/",
    postTitle: "Got it working on M13",
    userName: "prathampatankar",
    subredditName: "SamsungDex",
  },
];

export const papers = [
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
