import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';

import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { LoginDTO } from 'src/app/dto/backend-DTOs/LoginDTO';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  obj : LoginDTO = new LoginDTO();

  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }



SubmitLogin(){
  if(this.obj.UserName == undefined){
    this.toastr.warning('Please Enter User name')
    return;
  }
  if(this.obj.Password == undefined){
    this.toastr.warning('Please Enter Password')
    return;
  }
  if(this.obj.UserName == ''){
    this.toastr.warning('User name Could not be empty')
    return;
  }
  
  this.spinner.show()
  this.backend.Login(this.obj).subscribe(res=>{
    this.spinner.hide()
    localStorage.setItem('isLoggedIn','true')
    localStorage.setItem('token',res)
    let data: any = jwtDecode(res);
    localStorage.setItem('userId',data.UserId)
    this.router.navigate(['/manage-dish'])
 } , error=>{
  this.spinner.hide()
  this.toastr.error('Wrong User name / Password')
 })
    
  }
}
