export interface SocialMedia {
  name: string;
  link: string;
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

