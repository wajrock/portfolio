import {CommonModule} from '@angular/common';
import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  link = input<string | null>(null);
  btnStyles = input<string[]>([]);
  disabledButton = input<boolean>(false);
  action = output<void>();
}
