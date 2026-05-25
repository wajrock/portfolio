import {Component} from '@angular/core';
import {
  SiDockerIcon,
  SiGitIcon,
  SiJiraIcon,
  SiNestjsIcon,
  SiPhpIcon,
  SiReactIcon,
  SiSassIcon,
  SiTypescriptIcon,
} from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-stack-section',
  imports: [
    SiTypescriptIcon,
    SiSassIcon,
    SiReactIcon,
    SiNestjsIcon,
    SiPhpIcon,
    SiDockerIcon,
    SiGitIcon,
    SiJiraIcon,
  ],
  templateUrl: './stack-section.component.html',
  styleUrl: './stack-section.component.scss',
})
export class StackSectionComponent {}
