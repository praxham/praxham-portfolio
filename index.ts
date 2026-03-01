import { getTotalStars } from "./github.server";
import home from "./index.html";

const totalStars = await getTotalStars();

Bun.serve({
  routes: {
    "/": home,
    "/projects": home,
    "/experience": home,
    "/education": home,
    "/content": home,
    "/papers": home,
    "/api/github/stars-count": Response.json(totalStars),
    "/api/resume/get-resume": new Response(
      Bun.file("./files/resume/PrathamPatankarResume.pdf"),
      {
        headers: {
          "Content-Disposition":
            'attachment; filename="PrathamPatankarResume.pdf"',
          "Content-Type": "application/pdf",
        },
      },
    ),
  },
});
