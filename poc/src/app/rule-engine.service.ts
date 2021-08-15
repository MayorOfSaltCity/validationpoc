import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Opportunity } from './opportunity-form/opportunity';
import { IRuleEngine } from './rule-engine-interface';
import { gte } from './validators/gte.validator';

@Injectable({
  providedIn: 'root'
})
export class RuleEngineService<Opportunity> implements IRuleEngine<Opportunity> {

  constructor() { }
  getRules(field:any, businessUnit:String, phase:number): ValidatorFn[] {
    // get required fields 
    console.log("getting rules");
    if (businessUnit != "LS" && phase != 7)  
      return null;

    if (field === "name" && businessUnit === "LS" && phase == 7)
      return [gte];

    return null;
  }
}

export class Rule {
  fieldName: String;
  validators: ValidatorFn[];
  constructor(name:any, validators: ValidatorFn[]) {
    this.fieldName = name;
    this.validators = validators;
  }
}
