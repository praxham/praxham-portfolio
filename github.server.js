const token = process.env.GITHUB_TOKEN;

export const getTotalStars = async () => {
  const response = await fetch(
    `https://api.github.com/user/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  const repos = await response.json();

  const totalStars = repos.reduce(
    (prev, curr) => prev + curr.stargazers_count,
    0,
  );

  return totalStars;
};

// meant to be used to fetch projects data from github (deployment uses already fetched projects from ./data.js)
export const getProjects = async () => {
  const response = await fetch(
    `https://api.github.com/user/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  const repos = await response.json();

  const includesItems = [
    "madeinvikhroli",
    "calc2pay",
    "pincode-base-address",
    "ShareDocs",
    "lightbar",
    "a-min-ago",
    "WebTV",
    "findingelectromagnticfield",
  ];

  const formattedRepos = includesItems
    .map((name) => {
      const repo = repos.find((r) => r.name === name);
      if (repo) {
        return {
          name: repo.name,
          description: repo.description,
          repo_url: repo.html_url,
          deployed_url: repo.homepage,
          language: repo.language,
        };
      }
      return null;
    })
    .filter((repo) => repo !== null);

  return formattedRepos;
};
