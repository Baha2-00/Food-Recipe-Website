import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { SignupDTO } from 'src/app/dto/backend-DTOs/SignupDTO';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  input:SignupDTO=new SignupDTO()

  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }


CreateNewAccount(){

  if(this.input.FirstName == undefined || this.input.FirstName == ''){
    this.toastr.warning('Please Enter First name')
    return;
  }
  if(this.input.LastName == undefined || this.input.LastName == ''){
    this.toastr.warning('Please Enter LastName')
    return;
  }
  if(this.input.Email == undefined || this.input.Email == ''){
    this.toastr.warning('Please Enter Email')
    return;
  }
  if(this.input.Password == undefined || this.input.Password == ''){
    this.toastr.warning('Please Enter Password')
    return;
  }
  if(this.input.Phone == undefined){
    this.toastr.warning('Please Enter Phone')
    return;
  }
  if(this.input.BirthDate == undefined || this.input.BirthDate == ''){
    this.toastr.warning('Please Enter BirthDate')
    return;
  }
  this.spinner.show()
  this.backend.Register(this.input).subscribe(res=>{
    this.spinner.hide()
    this.toastr.success('New Account has been Created')
    this.router.navigate(['/signin'])
  },err=>{
    this.spinner.hide()
    this.toastr.error('Failed To Create Account')
  })

}

}
