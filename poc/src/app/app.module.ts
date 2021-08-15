import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpportunityFormComponent } from './opportunity-form/opportunity-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Rule, RuleEngineService } from './rule-engine.service';

@NgModule({
  declarations: [
    AppComponent,
    OpportunityFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
