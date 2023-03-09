import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './manage-products.component';
import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UxproductService } from '../appService/uxproduct.service';



@NgModule({
  declarations: [
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ManageProductsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UxproductService
  ],
})
export class ManageProductsModule { }
