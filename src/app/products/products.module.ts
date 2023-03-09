import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { Route, RouterModule } from '@angular/router';
import { DesignUtilityModule } from '../appModule/design-utility.module';
import { ProductsRoutingModule } from './products-routing.module';


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
    DesignUtilityModule,
    ProductsRoutingModule
  ],
  exports: [
    RouterModule
  ]

})
export class ProductsModule {
  constructor(){
    console.log('Products module loaded');
  }
 }
