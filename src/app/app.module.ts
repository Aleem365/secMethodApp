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
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItems } from './appModels/gallery';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailComponent } from './services/services-detail/services-detail.component';
import { ServiceDetail } from './appModels/services';
import { DropdownDirective } from './appDirectives/dropdown.directive';

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
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingMachineComponent,
    GalleryComponent,
    GalleryItemComponent,
    ServicesComponent,
    ServicesDetailComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    GalleryItems,
    ServiceDetail
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
