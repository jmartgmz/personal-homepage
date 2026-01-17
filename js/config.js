/**
 * Startpage Configuration
 * This file contains all user-configurable settings for the startpage
 */

// Page 1: Primary Services
const page1Config = {
  // Email and storage category
  protonServices: {
    title: "Proton",
    color: "blue",
    links: [
      { name: "Mail", url: "https://mail.proton.me/inbox" },
      { name: "Storage", url: "https://drive.proton.me/" },
    ]
  },
  // Google services category
  googleServices: {
    title: "Google",
    color: "blue",
    links: [
      { name: "Mail", url: "https://mail.google.com/mail/inbox" },
      { name: "Storage", url: "https://drive.google.com/drive/home" },
    ]
  },
  // Server category
  server: {
    title: "Server",
    color: "blue",
    links: [
      { name: "Files", url: "https://filebrowser.cosmos.karyio.com/" },
      { name: "Cosmos", url: "https://cosmos.karyio.com/cosmos-ui/" },
    ]
  },
};

// Page 2: Learning & Work
const page2Config = {
  // University category
  university: {
    title: "University",
    color: "blue",
    links: [
      { name: "Canvas", url: "https://udel.instructure.com" },
      { name: "UDSIS", url: "https://my.udel.edu" },
    ]
  },
  // Learning category
  Learning: {
    title: "Learning",
    color: "blue",
    links: [
      { name: "Renshuu", url: "https://www.renshuu.org/me" },
      { name: "Neetcode", url: "https://neetcode.io/practice" },
    ]
  },
  // LLM Category
  aiModels: {
    title: "LLM",
    color: "blue",
    links: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Gemini", url: "https://gemini.google.com/app"}
    ]
  },
  // Important Category
  Important: {
    title: "Important",
    color: "blue",
    links: [
      { name: "Github", url: "https://github.com/jmartgmz" },
      { name: "Indeed", url: "https://secure.indeed.com" },
    ]
  },
};

// Page 3: Tracking
const page3Config = {
  // Tracking Category
  Tracking: {
    title: "Tracking",
    color: "blue",
    links: [
      { name: "AniList", url: "https://anilist.co/" },
      { name: "Letterboxd", url: "https://letterboxd.com/" },
      { name: "RetroAchieve", url: "https://retroachievements.org/" }
    ]
  },
  // Improvement Category
  Improvement: {
    title: "Improvement",
    color: "blue",
    links: [
      { name: "Youtube", url: "https://www.youtube.com/" },
      { name: "Neetcode", url: "https://neetcode.io/practice" },
      { name: "Monkeytype", url: "https://monkeytype.com/" },
    ]
  },
};

// Keep old names for backward compatibility
const navigationConfig = page1Config;
const alternateNavigationConfig = page2Config;

// Global appearance and behavior settings
const globalSettings = {
  // Font configuration
  font: {
    family: 'Font',
    path: 'assets/fonts/apple/Univers 47 Condensed Light Oblique.otf',
    fallback: 'Arial, Helvetica, sans-serif'
  },
  // Search engine (default: Google)
  searchEngine: {
    name: "Google",
    url: "https://www.google.com/search",
    queryParam: "q"
  },
  // Username to display (optional)
  username: "",
  // Theme color (affects accent colors)
  themeColor: "blue" // Options: blue, green, red, yellow
};

// Export configuration for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { navigationConfig, alternateNavigationConfig, page1Config, page2Config, page3Config, globalSettings };
}