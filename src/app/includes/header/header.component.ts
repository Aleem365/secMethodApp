import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/appService/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    //-------------------------------------------// 
   // New Properties for Updated Header Concepts//
  //-------------------------------------------// 

  goBackLink?:any; //For Go Back Link
  headerNav?:boolean; // For Header Menu
  headerLoginBlock?:boolean=false; //For Header Login Block
  headerContactDetails?:boolean; // For Header Contact Details
  loggedInUser?:string; // For LoggedIn User

  
  constructor(private _header:HeaderService,private router:Router) {
     // For Header Contact Details
     this._header.headerContactDetails.subscribe((res)=>{
      this.headerContactDetails=res;
    });
    // For Header Menu
    this._header.headerNav.subscribe((res)=>{
      this.headerNav=res;
    });
    //For Go Back Link
    this._header.goBackLink.subscribe((res)=>{
      this.goBackLink=res;
    });
     //For Header Login Block
    this._header.headerLoginBlock.subscribe((res)=>{
      this.headerLoginBlock=res;
    });
   }
  ngOnInit() {
    this._header.loggedInUser.subscribe((res)=>{
      this.loggedInUser=res;
    })
  }
  onLogout(){
    this.router.navigate(['login'])
    this._header.loggedInUser.next('')
  }
}
