import { FormGroup, Validators } from "@angular/forms";

export function surnameConditionallyRequiredValidator(formGroup: FormGroup) {
    var n = formGroup.value.name; 
    console.log(n);
    if (n >= 10) {
      return Validators.required(formGroup.get('surname')) ? 
        {
        surnameConditionallyRequiredValidator: true,
      } : null;
    }
    return null;
  }