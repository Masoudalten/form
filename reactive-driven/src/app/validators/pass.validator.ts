import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const pass1 = control.root.get('pass')?.value;
    const pass2 = control.value;

    return pass1 === pass2 ? null : { 'passwordMismatch': true };
  }

}
