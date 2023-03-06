import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../appService/header.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  constructor(private _header:HeaderService){ }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
