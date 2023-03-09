import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesComponent } from './services.component';
import { DesignUtilityModule } from '../appModule/design-utility.module';
import { ServicesRoutingModule } from './services-routing.module';


@NgModule({
  declarations: [
   ServicesComponent,
  ServicesDetailComponent
  ],
  imports: [
    CommonModule,
    DesignUtilityModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule {
    constructor(){
    console.log('Services module loaded');
  }
 }
