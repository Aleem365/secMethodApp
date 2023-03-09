import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HeaderComponent } from './includes/header/header.component';
import { MenuComponent } from './includes/menu/menu.component';
import { GalleryItems } from './appModels/gallery';
import { GalleryModule } from './gallery/gallery.module';
import { ServiceDetail } from './appModels/services';
import { ServicesModule } from './services/services.module';
import { ProductsModule } from './products/products.module';
import { ManageProductsModule } from './manage-products/manage-products.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GalleryModule,
    NgbModule,
    ServicesModule,
    ProductsModule,
    ManageProductsModule,
    HttpClientModule,

  ],
  providers: [
    GalleryItems,
    ServiceDetail,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (){
    console.log('App module loaded');
  }
}
