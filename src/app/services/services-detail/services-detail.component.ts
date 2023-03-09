import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceDetail } from 'src/app/appModels/services';
import { HeaderService } from 'src/app/appService/header.service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit, OnDestroy {
  id:any;
  selectedServiceDetail:any;
  serviceArr:any=[];
  constructor(private serviceDetail:ServiceDetail,private activeRoute:ActivatedRoute,private _header:HeaderService){ }
  ngOnInit(): void {
    this._header.goBackLink.next({text:'Back to Service',url:'/services'});
    this._header.headerNav.next(false);
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id=params['id'];
      this.serviceArr=this.serviceDetail.serviceItems;
    this.selectedServiceDetail=this.serviceArr[this.id -1];
    })
  }
  ngOnDestroy(): void {
    this._header.goBackLink.next({text:'',url:''});
    this._header.headerNav.next(true);
  }
}
