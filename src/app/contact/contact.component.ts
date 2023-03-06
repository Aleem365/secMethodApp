import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../appService/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  show:boolean=true;
  constructor(private _header:HeaderService){ }
  ngOnInit(): void {
    this._header.headerContactDetails.next(this.show);
    this._header.headerLoginBlock.next(false);
  }
  ngOnDestroy(){
    this._header.headerContactDetails.next(false);
    this._header.headerLoginBlock.next(true)
  }
}
