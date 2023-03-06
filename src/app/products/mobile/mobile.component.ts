import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appService/header.service';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit,OnDestroy {
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
