import { Component, OnInit } from '@angular/core';
import { ServiceDetail } from '../appModels/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceDetailArr:any=[];
  constructor(private servicesItems:ServiceDetail){ }
  ngOnInit(): void {
    this.serviceDetailArr=this.servicesItems.serviceItems;
  }

}
