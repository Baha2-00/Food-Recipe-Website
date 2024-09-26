import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  IsloggedIn :boolean = false;

  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }
    ngOnInit(){
    let userId = localStorage.getItem('userId')
    let token = localStorage.getItem('token')
    if(userId != null && token!= null){
      if(userId == 'none' && token =='none'){
        this.IsloggedIn=false;
      }else{
        this.IsloggedIn=true;
      }
    }
  }

  

  NaivageteToLogin(){
    this.router.navigate(['/signin'])
  }

  NaivageteToClientDashboard(){
    this.router.navigate(['/manage-dish'])
  }

  Logout(){
    this.backend.Logout()
  }
}
