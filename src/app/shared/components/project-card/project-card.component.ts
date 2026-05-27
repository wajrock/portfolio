import {Component, input} from '@angular/core';
import {Project} from '../../models';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  // INPUTS
  projectInfos = input.required<Project>();
}
