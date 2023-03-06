import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appService/header.service';
@Component({
  selector: 'app-washing-machine',
  templateUrl: './washing-machine.component.html',
  styleUrls: ['./washing-machine.component.css']
})
export class WashingMachineComponent implements OnInit,OnDestroy {
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
