import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { GetCuisineDto } from 'src/app/dto/backend-DTOs/GetCuisineDto';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent {

  cui : GetCuisineDto[] =[]

  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }

  ngOnInit(){
    this.backend.GetAllCusines().subscribe(
      res=>{
        this.cui=res
      }, err=>{
        this.toastr.error('error mes')
      }
    )
    
  }

}
