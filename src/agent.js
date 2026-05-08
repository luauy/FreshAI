import { Octokit } from "octokit";

export const FreshAgent = {
  // The 'If Yes' logic for writing to the user's repo
  writeToRepo: async (token, repoDetails, path, content) => {
    const octokit = new Octokit({ auth: token });

    try {
      // 1. Get current file state
      const { data } = await octokit.rest.repos.getContent({
        owner: repoDetails.owner,
        repo: repoDetails.name,
        path: path,
      });

      // 2. Push the AI-generated update
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: repoDetails.owner,
        repo: repoDetails.name,
        path: path,
        message: "🍃 FreshAI: Automated logic update",
        content: btoa(content),
        sha: data.sha,
      });

      return { success: true };
    } catch (error) {
      console.error("Agent Error:", error);
      return { success: false, error: error.message };
    }
  }
};
