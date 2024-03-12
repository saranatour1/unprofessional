import Email from "../components/icons/Email.astro";
import Github from "../components/icons/Github.astro";
import LinkedIn from "../components/icons/LinkedIn.astro";

export const birthdate = new Date("1999-04-28");

export interface SocialMedia {
  name: string;
  link: string;
  svg: (_props: Record<string, any>) => any;
}

export interface SelectedProjects {
  name: string;
  link: string;
  mainTechnologies?: string[];
  flag: boolean;
}

export interface FrontendMentorChallenge {
  name: string;
  repo: string;
  live?: string;
  tech: string[];
}

export interface OtherProject {
  name: string;
  link: string;
  live?: string;
  mainTechnologies?: string[];
  flag:boolean;
}

export interface Interest {
  name: string;
  reason: string;
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
const TLDR = `Sara, ${Number(
  new Date().getFullYear() - birthdate.getFullYear()
)}, Full-stack developer, For more information check my Github account.`;

/**
 * @description my full-stack projects
 */
const fs: SelectedProjects[] = [
  { name: "Moods", link: "https://github.com/saranatour1/Moods", mainTechnologies: ["Django", "SQLLite"], flag: true },
  {
    name: "Travel Designer",
    link: "https://github.com/saranatour1/Traval-Designer",
    mainTechnologies: ["React", "NodeJs", "Tailwindcss"],
    flag: true,
  },
  {
    name: "FeedMe",
    link: "https://github.com/saranatour1/FeedMe",
    mainTechnologies: ["SpringBoot", "Google Maps Api"],
    flag: true,
  },
  {
    name: "StarryNight.com3",
    link: "https://github.com/saranatour1/starrynight",
    mainTechnologies: ["sveltekit", "postgresSQL", "EmailJs"],
    flag: false,
  },
];

/**
 * @description selected my frontend mentor challenges
 */
const fe: FrontendMentorChallenge[] = [
  {
    name: "Profile-card",
    repo: "https://github.com/saranatour1/Profile-card-component-coding-challenge",
    live: "https://profile-card-flame-one.vercel.app/",
    tech: ["vue", "tailwindcss"],
  },
  {
    name: "to-do list",
    repo: "https://github.com/saranatour1/Todo-app-svelte",
    live: "https://todo-app-femc.vercel.app/",
    tech: ["svelte", "tailwindcss"],
  },
];

/**
 * @description my other interesting projects
 */
const op: OtherProject[] = [
  {
    name: "Time-zones",
    link: "https://github.com/saranatour1/TimeZones-in-Svelte",
    live: "https://time-zones-in-svelte.vercel.app/",
    mainTechnologies: ["tailwindcss,svelte"],
    flag:true,
  },
  {
    name: "color-scroll",
    link: "https://github.com/saranatour1/Lazy--color-scroll",
    mainTechnologies:["javascript"],
    flag:true,
  },
  {
    name: "image-gallery",
    link: "https://github.com/saranatour1/image-gallery",
    live: "https://image-gallery-eight-inky.vercel.app/",
    flag:true,
    mainTechnologies:["svelte"],
  },
  {
    name: "Personal-website",
    link: "https://github.com/saranatour1/Personal-Website",
    live: "https://saranatour.dev/",
    mainTechnologies:["Astro,Tailwindcss"],
    flag:true,
  },
];

/**
 * @description my other interests
 */
const myInterests: Interest[] = [
  {
    name: "time zones",
    reason:
      "Time differences amaze me quite a lot, if you haven't seen that already from the amount of time related things I have.",
  },
  {
    name: "Sustainability & sustainable power generations",
    reason:
      "I like to see the world in green, and Power to be given to everyone, everywhere. <a href='https://www.anker.com/'>anker</a>",
  },
  {
    name: "small homes (specifically container houses)",
    reason: "I want to make my own small home one day, lookup <a href='https://www.iconbuild.com/'>iconbuild</a>",
  },
  {
    name: "documentaries on youtube",
    reason: "you can message/email me if interested!",
  },
];

/**
 * @description my socials,
 */
const mySocials: SocialMedia[] = [
  { name: "linkedin", link: import.meta.env.PUBLIC_LINKEDIN as string, svg: LinkedIn },
  { name: "github", link: import.meta.env.PUBLIC_GITHUB as string, svg: Github },
  { name: "email", link: import.meta.env.PUBLIC_EMAIL as string, svg: Email },
];

export { mainHeading, whatIDo, TLDR, fs, fe, op, myInterests, mySocials };
