import {Component} from '@angular/core';
import {ButtonComponent} from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact-section',
  imports: [ButtonComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  year = new Date().getFullYear();
}
