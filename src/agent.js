// lib/agent.js
import { Octokit } from "octokit";
import { getProjectContext } from "./dictionary.js";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const context = getProjectContext();

export const shipCode = async (fileName, content, commitMessage) => {
  console.log(`🍃 FreshAI is preparing to ship to ${context.dictionary.main_repo}...`);

  try {
    // 1. Get current file data (to update it)
    const { data: currentFile } = await octokit.rest.repos.getContent({
      owner: "lupsup39",
      repo: "FreshAI",
      path: fileName,
    });

    // 2. Execute the Push
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: "lupsup39",
      repo: "FreshAI",
      path: fileName,
      message: `${context.settings.git_flow.commit_prefix} ${commitMessage}`,
      content: Buffer.from(content).toString('base64'),
      sha: currentFile.sha,
    });

    return "✅ Successfully shipped to GitHub!";
  } catch (error) {
    return `❌ Ship failed: ${error.message}`;
  }
};
