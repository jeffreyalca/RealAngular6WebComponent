import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first',
  pure: true,
})
export class FirstPipe implements PipeTransform {
  transform(value: any): any {
    if (!value || !Array.isArray(value)) return value;
    return value[0];
  }
}
