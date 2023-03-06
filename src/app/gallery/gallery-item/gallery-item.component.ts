import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from 'src/app/appModels/gallery';
import { HeaderService } from 'src/app/appService/header.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit, OnDestroy {
  id: any;
  gallery: any;
  selectedObject: any = [];

  constructor(private gallerys: GalleryItems, private _route: ActivatedRoute,private _header:HeaderService) { 
  }

  ngOnInit() {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:'Back to Gallery',url:'/gallery'});

    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.gallery = this.gallerys.galleryImages;
      this.selectedObject = this.gallerys.galleryImages[this.id - 1];
    });
  }
  ngOnDestroy(): void {
    this._header.headerNav.next(true);
    this._header.goBackLink.next({text:'',url:''});
  }
  
  onCheck() {
    console.log(this.selectedObject);
  }
}

