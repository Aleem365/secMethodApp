import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any = FormGroup;
  constructor(){ }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),
      'checkbox': new FormControl(''),
    })
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
