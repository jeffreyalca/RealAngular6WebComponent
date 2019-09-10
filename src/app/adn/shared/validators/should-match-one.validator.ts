import { AbstractControl } from '@angular/forms';

interface Error {
  match?: boolean;
}

export function ShouldMatchOne(valuesToMatch: string[]) {
  return function validate(control: AbstractControl): Error {
    if (!control.value) return null;

    if (!valuesToMatch.includes(control.value)) {
      return { match: true };
    }

    return null;
  };
}
