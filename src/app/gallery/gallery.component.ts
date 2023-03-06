import { Component } from '@angular/core';
import { GalleryItems } from '../appModels/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
 
  constructor(private gallery:GalleryItems) {
  this.galleryImages=this.gallery.galleryImages;

   }
  id:any;
  galleryImages:any=[ ];
  selectedObject:any;
  ngOnInit(): void {
  }
}
