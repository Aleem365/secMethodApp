import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceDetail } from 'src/app/appModels/services';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {
  id:any;
  selectedServiceDetail:any;
  serviceArr:any=[];
  constructor(private serviceDetail:ServiceDetail,private activeRoute:ActivatedRoute){ }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id=params['id'];
      this.serviceArr=this.serviceDetail.serviceItems;
    this.selectedServiceDetail=this.serviceArr[this.id -1];
    })
  }
}
