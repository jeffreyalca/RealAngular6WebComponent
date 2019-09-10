import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escapeChars',
  pure: true,
})
export class EscapeCharsPipe implements PipeTransform {
  transform(input: string): string {
    if (typeof input !== 'string') throw new Error('Input must be a string.');
    return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
}
