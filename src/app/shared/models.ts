export enum SCROLL_DIRECTION {
  LEFT = 0,
  RIGHT = 1,
}

export interface Project {
  name: string;
  context: string;
  projectType: string;
  description: string;
  tags: string[];
  stack: string[];
  duration: string;
  bgColor: string;
  accentColor: string;
}

export interface Journey {
  type: JOURNEY_TYPE;
  date: string;
  title: string;
  description: string;
  link: string;
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

export enum JOURNEY_TYPE {
  EXPERIENCE = 'experience',
  FORMATION = 'formation',
  OTHER = 'other',
}
