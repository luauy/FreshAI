// lib/dictionary.js
import fs from 'fs';
import path from 'path';

export const getProjectContext = () => {
  // Read your custom "Fresh" rules
  const freshConfig = JSON.parse(fs.readFileSync('./fresh.json', 'utf8'));
  
  // Scrape your local directory for a "Dictionary of Files"
  const files = fs.readdirSync('./src', { recursive: true });
  
  return {
    identity: freshConfig.assistant_name,
    standards: freshConfig.settings.framework_priority,
    dictionary: {
      files: files.filter(f => f.includes('.')),
      main_repo: `github.com/${freshConfig.github_user}/FreshAI`,
      rules: freshConfig.rules
    }
  };
};
