import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencyComponent } from './emergency.component';


const routes: Routes = [{
  path: '',
  component: EmergencyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyRoutingModule { }
