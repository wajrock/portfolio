import {Component, input} from '@angular/core';
import {Project} from '../../../models';
import {LanguageIconComponent} from '../../language-icon/language-icon.component';

@Component({
  selector: 'app-project-card',
  imports: [LanguageIconComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  projectInfos = input.required<Project>();
}
