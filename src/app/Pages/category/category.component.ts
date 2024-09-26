import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { GetCategoryDTO } from 'src/app/dto/backend-DTOs/GetCategoryDTO';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  cat : GetCategoryDTO[] =[]

  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }

  ngOnInit(){
    this.spinner.show()
    this.backend.GetAllCategories().subscribe(
      res=>{
        this.cat=res
        this.spinner.hide()
      }, err=>{
        this.spinner.hide()
        this.toastr.error('Somrthing Wrong Happened')
      }
    )
    
  }
}