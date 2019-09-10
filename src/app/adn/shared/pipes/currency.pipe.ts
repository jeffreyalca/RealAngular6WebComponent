import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ecpcurrency',
  pure: true,
})
export class EcpCurrencyPipe implements PipeTransform {
  transform(input: number): any {
    if (typeof input !== 'number') throw new Error('Input must be a number');
    const suffixes = ['k', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'];

    if (input < 1000) return `$${input}`;

    const exp = Math.floor(Math.log(input) / Math.log(1000));
    const value = (input / Math.pow(1000, exp)).toFixed();

    return `$${value}${suffixes[exp - 1]}`;
  }
}
