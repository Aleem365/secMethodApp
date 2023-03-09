import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesComponent } from './services.component';

const ServiceRoute: Routes = [
  {path:'',children:[
  {path:'services', component:ServicesComponent},
  {path:'services/:id', component:ServicesDetailComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(ServiceRoute)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
