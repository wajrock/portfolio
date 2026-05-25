export enum SCROLL_DIRECTION {
  LEFT = 0,
  RIGHT = 1,
}

export interface Project {
  name: string;
  description: string;
  stack: LANGUAGE[];
  bgColor: string;
  illustrationLink: string;
}

export enum LANGUAGE {
  ANGULAR = 'angular',
  TYPESCRIPT = 'typescript',
  SASS = 'sass',
  DOCKER = 'docker',
  FIGMA = 'figma',
  JIRA = 'jira',
}

export enum CAROUSEL_SECTION {
  PROJECTS = 'projects',
  REFERENCES = 'references',
}
