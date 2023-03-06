import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appService/header.service';
@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit,OnDestroy {
constructor(private _header:HeaderService){ }
  ngOnInit(): void {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:'Back to Products',url:'/products'});
  }
  ngOnDestroy(): void {
    this._header.headerNav.next(true);
    this._header.goBackLink.next({text:'',url:''});
  }
}
