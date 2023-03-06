import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../appService/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any = FormGroup;
  constructor(private _header:HeaderService,private router:Router){ }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),
      'checkbox': new FormControl(''),
    })
  }
  onSubmit(){
    let uname = this.loginForm.value.username;
    let pass = this.loginForm.value.password;
    if( pass === '123'){
      this.router.navigate(['home']);
      this._header.loggedInUser.next(uname);
    }else{
      alert('please enter correct Details');
    }
  }
  }


