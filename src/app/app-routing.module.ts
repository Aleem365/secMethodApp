import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'gallery/:id', component:GalleryItemComponent},
  {path:'products', component:ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'laptop', component:LaptopComponent},
  {path:'mobile', component:MobileComponent},
  {path:'television', component:TelevisionComponent},
  {path:'washing-machine', component:WashingMachineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
