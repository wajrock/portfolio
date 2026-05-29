import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stackFormat',
})
export class StackFormatPipe implements PipeTransform {
  transform(stack: string[]): string {
    return stack.join(' · ');
  }
}
