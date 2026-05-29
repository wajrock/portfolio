import {Component, input} from '@angular/core';
import {Project} from '../../../shared/models';
import {StackFormatPipe} from './pipes/stack-format-pipe';

@Component({
  selector: 'app-project-section',
  imports: [StackFormatPipe],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  projectInfos = input.required<Project>();
}
