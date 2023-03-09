import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes  = [
  {path:'login', component:LoginComponent},
  // {path: 'products',
  //   loadChildren: () =>import ('./products/products.module').then(m=>m.ProductsModule)
  // },
  // {path: 'services',
  //   loadChildren: ()=>import('./services/services.module').then(m=>m.ServicesModule)
  // },
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
