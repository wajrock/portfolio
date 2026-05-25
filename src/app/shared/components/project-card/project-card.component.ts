import {Component, input} from '@angular/core';
import {LanguageIconComponent} from '../language-icon/language-icon.component';
import {Project} from '../../models';

@Component({
  selector: 'app-project-card',
  imports: [LanguageIconComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  // INPUTS
  projectInfos = input.required<Project>();
}
