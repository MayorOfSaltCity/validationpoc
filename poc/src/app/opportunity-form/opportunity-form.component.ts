import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {gte} from 'src/app/validators/gte.validator';
import { surnameConditionallyRequiredValidator } from '../validators/surname.validator';
@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.css']
})
export class OpportunityFormComponent implements OnInit {
  form :FormGroup;
  name : String;
  surname : String;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [gte]),
      surname: new FormControl('', []) // this would be replaced with a list of validators returned from the service
    }, {
      validators : [surnameConditionallyRequiredValidator]
    })
  }

}
