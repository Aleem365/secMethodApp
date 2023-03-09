import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryComponent } from './gallery.component';
import { Route, RouterModule } from '@angular/router';

const galleryRoute:Route[]=[
  {path:'gallery', component:GalleryComponent},
  {path:'gallery/:id', component:GalleryItemComponent},
]
@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoute),
  ]
})
export class GalleryModule { 
    constructor(){
    console.log('Gallery module loaded');
  }
}
