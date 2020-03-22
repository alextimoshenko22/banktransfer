import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class CreditCardValidator {
  static validateCCNumber(control: AbstractControl): ValidationErrors|null {

    let num = control.value?control.value.toString().replace(/\s+|-/g, ''):'';

    if (!/^\d+$/.test(num)) {
      return {'ccNumber': true};
    }

    if (num.length === 16) {
        return null;
    }

    return {'ccNumber': true};
  }

  static validateSum(control: AbstractControl): ValidationErrors|null {

    let sum = control.value?control.value.toString() : '';

    if (!/[0-9]*[.,]?[0-9]+$/.test(sum)) {
      return {'sum': true};
    }

    return null;
  }

}