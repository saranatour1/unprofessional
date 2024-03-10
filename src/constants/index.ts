import Email from "../components/icons/Email.astro";
import Github from "../components/icons/Github.astro";
import LinkedIn from "../components/icons/LinkedIn.astro";

interface SocialMedia {
  name: string;
  link: string;
  svg: (_props: Record<string, any>) => any;
}

/**
 * @description The purpose of this file is to make
 */

const mainHeading = `The un-professional version of My Portfolio`;

/**
 * @description the unprofessional version of the about me;
 */
const whatIDo = `I am Sara (S-A-R-A), A Full-stack developer with a background in electrical engineering. I career shifted last year (2023 to be exact),
  I have a few reasons that made me decide to do this career shift, one of which is me being petty that in my graduation project I wasn't allowed to experiment 
  with creating my own analytics website, for my data, and it was a thing that interested me for a couple of years to look into.
  its an interesting new path, with a lot of new challenges, no path has a no obstacles, and what interests me about this one is that you always have something to learn,
  and you'll always find a community to answer your questions if you have any!`;

/**
 * @description TL;DR
 */
const TLDR = `Sara, 24, Full-stack developer, For more information check my Github account.`;

/**
 * @description my full-stack projects
 */
const fs: object[] = [];

/**
 * @description my frontend mentor projects
 */
const fe: object[] = [];

/**
 * @description my other interesting projects
 */
const op: object[] = [];

/**
 * @description my other interests
 */
const myInterests: object[] = [];

/**
 * @description my socials,
 */
const mySocials: SocialMedia[] = [
  { name: "linkedin", link: process.env.PUBLIC_LINKEDIN as string, svg: LinkedIn },
  { name: "github", link: process.env.PUBLIC_GITHUB as string, svg: Github },
  { name: "email", link: process.env.PUBLIC_EMAIL as string, svg: Email },
];

export { mainHeading, whatIDo, TLDR, fs, fe, op, myInterests, mySocials };
