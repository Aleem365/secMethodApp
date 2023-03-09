import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';

const proRoute: Routes = [
    {path:'products',children:[
    {path:'',component:ProductsComponent},
    {path:'mobile', component:MobileComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'television', component:TelevisionComponent},
    {path:'washing-machine', component:WashingMachineComponent},
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(proRoute)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
