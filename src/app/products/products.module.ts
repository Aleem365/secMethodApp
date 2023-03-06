import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { Route, RouterModule } from '@angular/router';

const proRoute:Route[]=[
  {path:'products', component:ProductsComponent},
  {path:'laptop', component:LaptopComponent},
  {path:'mobile', component:MobileComponent},
  {path:'television', component:TelevisionComponent},
  {path:'washing-machine', component:WashingMachineComponent},
];

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingMachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoute)
  ]
})
export class ProductsModule { }
