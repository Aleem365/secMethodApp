import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, } from '@angular/forms';
import { UxproductService } from '../appService/uxproduct.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  productForm:any=FormGroup;
  loading=false;
  title=this._uxproduct.getTitle();
  editData:any={};
  // editId='';
  // editName='';
  // editPrice='';
  productList:any=[ ];
 
  constructor(private _uxproduct:UxproductService){ }
  ngOnInit(): void {
    this.productForm= new FormGroup({
      product_id: new FormControl(''),
      product_name: new FormControl(''),
      product_price: new FormControl(''),
    });
     this.onFetchProduct(); 
  }
 
  onAddProduct(){
   this.productList.push(
    {
     id:this.productForm.value.product_id, 
     name:this.productForm.value.product_name, 
     price:this.productForm.value.product_price, 
    }
   )
  }
  onSaveProduct(){
    this._uxproduct.saveProducts(this.productList).subscribe((res)=>{
      res
    })
  }
  onFetchProduct(){
       this.loading=true;
    this._uxproduct.fetchProducts().subscribe((res)=>{
      this.productList =res;
      this.loading=false;
    })
  }
  onDeleteProduct(id:Number){
    if(confirm("Do you want this product?")){
      
      this.productList.splice(id,1)
      this.onSaveProduct()
    }
  }
  onEditProduct(index:any){
  this.editData = this.productList[index];
  console.log(this.editData)

  // this.editId = this.productList[index].id;
  // this.editName = this.productList[index].name;
  // this.editPrice = this.productList[index].price;
  //   console.log(this.editId) ;
  //    console.log(this.editName); 
  //    console.log(this.editPrice) ;
  }

}
