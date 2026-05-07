import { Octokit } from "octokit"; // octokit is prob used in github so idk, commit here if wrong

export const pushCodeToGithub = async (config, fileName, content) => {
  if (!config.isWritingEnabled) {
    console.log("Writing is disabled in config.");
    return { success: false, message: "Writing is false" };
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    // Logic to push to GitHub using the 'luauy' handle
    console.log(`Writing ${fileName} to ${config.github.repoName}...`);
    // API call logic here...
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
