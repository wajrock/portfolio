import {Component, input} from '@angular/core';
import {LANGUAGE} from '../../models';
import {
  SiAngularIcon,
  SiTypescriptIcon,
  SiSassIcon,
  SiJiraIcon,
  SiFigmaIcon,
  SiDockerIcon,
} from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-language-icon',
  imports: [SiAngularIcon, SiTypescriptIcon, SiSassIcon, SiJiraIcon, SiFigmaIcon, SiDockerIcon],
  templateUrl: './language-icon.component.html',
  styleUrl: './language-icon.component.scss',
})
export class LanguageIconComponent {
  // CONSTANTS
  readonly LANGUAGE = LANGUAGE;

  // INPUTS
  languageIcon = input.required<LANGUAGE>();
}
