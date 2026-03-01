import home from "./public/index.html";

// SPA, actual routing handled in router.js
Bun.serve({
  routes: {
    "/": home,
    "/projects": home,
    "/experience": home,
    "/education": home,
    "/content": home,
    "/papers": home,
  },
});
