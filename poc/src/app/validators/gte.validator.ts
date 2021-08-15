import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function gte(control: AbstractControl): ValidationErrors | null {
    var v = control.value;  

    if (v.length < 5) {
        return { 'gte': true, 'requiredValue': 5 }
    } 

    return null;
}