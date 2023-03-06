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
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItems } from './appModels/gallery';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { ProductsModule } from './products/products.module';
import { GalleryModule } from './gallery/gallery.module';

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
    ProductsModule,
    GalleryModule,
    NgbModule,
  ],
  providers: [GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
