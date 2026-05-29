import {Component} from '@angular/core';
import {
  SiDockerIcon,
  SiGitIcon,
  SiJiraIcon,
  SiNestjsIcon,
  SiReactIcon,
  SiTypescriptIcon,
} from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-stack-section',
  imports: [SiTypescriptIcon, SiReactIcon, SiNestjsIcon, SiDockerIcon, SiGitIcon, SiJiraIcon],
  templateUrl: './stack-section.component.html',
  styleUrl: './stack-section.component.scss',
})
export class StackSectionComponent {}
