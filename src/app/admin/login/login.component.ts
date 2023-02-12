import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';

import { LoginserviceService } from './loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin:Admin = new Admin();
  username= 'anjaney'

  constructor(private loginservice: LoginserviceService, private router: Router) {}
  ngOnInit(): void {
   
  }
  Login(){
    console.log(this.admin)
    this.loginservice.loginAdmin(this.admin).subscribe((data)=>{
      alert("Login Successfully")
      this.router.navigate(['menu-details',this.username]);
    }, (error)=>alert("Sorry please enter correct UserId and Password"));
    
  }


}
