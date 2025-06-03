import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Dammuso Kaggiar",
  EMAIL: "test@email.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A charming ancient Dammuso nestled in the lush greenery of Pantelleria.",
};

export const BLOG: Metadata = {
  TITLE: "Welcome",
  DESCRIPTION: "Useful information for your stay at Dammuso Kaggiar.",
};

export const SOCIALS: Socials = [
  {
    NAME: "instagram",
    HREF: "https://instagram.com/",
  }
];

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Get to know the dammuso.",
};


export const EXPLORE: Metadata = {
  TITLE: "Explore Pantelleria",
  DESCRIPTION: "Some tips from a local.",
};
