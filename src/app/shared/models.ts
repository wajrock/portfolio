export enum SCROLL_DIRECTION {
  LEFT = 0,
  RIGHT = 1,
}

export interface Project {
  name: string;
  projectType: string;
  description: string;
  stack: LANGUAGE[];
  bgColor: string;
  accentColor: string;
  illustrationLink: string;
}

export enum LANGUAGE {
  ANGULAR = 'angular',
  TYPESCRIPT = 'typescript',
  SASS = 'sass',
  DOCKER = 'docker',
  FIGMA = 'figma',
  JIRA = 'jira',
  PYTHON = 'python',
  JAVA = 'java',
  NESTJS = 'nestjs',
  MYSQL = 'mysql',
  PHP = 'php',
  GIT = 'git',
}

export enum CAROUSEL_SECTION {
  PROJECTS = 'projects',
  REFERENCES = 'references',
}
