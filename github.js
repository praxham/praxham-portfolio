export const getTotalStarsClient = async (username) => {
  const response = await fetch("/api/github/stars-count");
  const totalStars = await response.json();

  if (!response.ok) {
    throw new Error(
      `Failed to fetch projects from API: ${response.statusText}`,
    );
  }

  return totalStars;
};
