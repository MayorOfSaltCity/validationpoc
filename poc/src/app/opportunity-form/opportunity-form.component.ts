import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { RuleEngineService } from '../rule-engine.service';
import { surnameConditionallyRequiredValidator } from '../validators/surname.validator';
import { Opportunity } from './opportunity';
@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.css']
})
export class OpportunityFormComponent implements OnInit {
  form :FormGroup;
  name : String;
  surname : String;
  constructor(private fb: FormBuilder, private res: RuleEngineService<Opportunity>) { 
    console.log("constructing opportunity form");
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', this.res.getRules("name","LS", 7)),
      surname: new FormControl('', this.res.getRules("surname","LS", 7)) // this would be replaced with a list of validators returned from the service
    }, {
      validators : [surnameConditionallyRequiredValidator]
    })
  }
}


