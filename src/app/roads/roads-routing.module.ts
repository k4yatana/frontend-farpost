import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LongestComponent } from './presentation/components/longest/longest.component';

const routes: Routes = [
  {
    path: 'longest',
    component: LongestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadsRoutingModule { }
