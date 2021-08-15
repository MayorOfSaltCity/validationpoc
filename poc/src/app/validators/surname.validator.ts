import { FormGroup, Validators } from "@angular/forms";

export function surnameConditionallyRequiredValidator(formGroup: FormGroup) {
    var n = formGroup.value.name; 
    console.log(n);
    if (!!n) {
      return Validators.required(formGroup.get('surname')) ? 
        {
        surnameConditionallyRequiredValidator: true, message: "Surname is required"
      } : null;
    }
    return null;
  }