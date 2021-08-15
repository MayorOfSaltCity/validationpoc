import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

export interface IRuleEngine<T> {
  getRules(field:any, businessUnit: String, phase: number): ValidatorFn[];
}