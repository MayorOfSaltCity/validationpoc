import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityFormComponent } from 'src/app/opportunity-form/opportunity-form.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'opportunity', component: OpportunityFormComponent },
  { path: '',   redirectTo: '/opportunity', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
