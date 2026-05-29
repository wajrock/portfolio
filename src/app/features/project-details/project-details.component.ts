import {Component, input} from '@angular/core';
import {ContactSectionComponent} from '../home-page/contact-section/contact-section.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {ProjectSectionComponent} from './project-section/project-section.component';
import projectsList from '../../shared/projects.json';
import {Project} from '../../shared/models';

@Component({
  selector: 'app-project-details',
  imports: [ContactSectionComponent, HeaderComponent, ProjectSectionComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  projects = projectsList as Project[];
  name = input.required<string>();
}
