import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { IRuleEngine } from '../rule-engine-interface';
import { RuleEngineService } from '../rule-engine.service';
import { surnameConditionallyRequiredValidator } from '../validators/surname.validator';
import { Opportunity } from './opportunity';
@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.css']
})
export class OpportunityFormComponent<Opportunity> implements OnInit {
  form :FormGroup;
  name : String;
  surname : String;
  private ruleEngine: IRuleEngine<Opportunity>;
  constructor(private fb: FormBuilder, private res: RuleEngineService<Opportunity>) { 
    this.ruleEngine = res;
    console.log("constructing opportunity form");
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', this.ruleEngine.getRules("name","LS", 7)),
      surname: new FormControl('', this.ruleEngine.getRules("surname","LS", 7)) // this would be replaced with a list of validators returned from the service
    }, {
      validators : [surnameConditionallyRequiredValidator]
    })
  }
}


