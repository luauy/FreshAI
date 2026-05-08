// src/lib/dictionary.js

const dictionary = {
  botIdentity: {
    name: "FreshAI",
    version: "1.0.4",
    tagline: "Pure Air Coding"
  },
  
  // These are the messages the user sees based on the 'Writing' logic
  responses: {
    idle: "Waiting for your command...",
    thinking: "Analyzing code structures...",
    writing: "🍃 Writing directly to your GitHub account...",
    manual: "Writing is disabled. Copy the code below to update manually.",
    success: "Successfully shipped! Check your repository.",
    error: "Connection failed. The Node workers might be on strike."
  },

  // Configuration labels for the UI
  ui: {
    toggleOn: "Bot Writing: ACTIVE",
    toggleOff: "Bot Writing: DISABLED",
    buttonShip: "Optimize & Ship",
    buttonCopy: "Copy Code"
  }
};

export default dictionary;
