import { FormGroup } from '@angular/forms';
import { flow, uniq, values, size } from 'lodash-es';

const valuesAreEqual = formValues =>
  flow([values, uniq, size])(formValues) === 1;

export function ValidateValuesAreEquals(formGroup: FormGroup) {
  if (valuesAreEqual(formGroup.value)) {
    return null;
  }

  return {
    mismatch: true,
  };
}
