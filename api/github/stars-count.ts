import { getTotalStars } from "../../github.server.js";

export const config = {
  runtime: "edge", // Use Edge Runtime for better performance
};

export default async function handler() {
  try {
    const totalStars = await getTotalStars();
    return new Response(JSON.stringify(totalStars), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate", // Cache for 1 hour
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch stars" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
