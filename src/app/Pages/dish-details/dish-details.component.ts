import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {  NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { DishDetailsDTO } from 'src/app/dto/backend-DTOs/DishDetailsDTO';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent {

  dishId:number=0
  dto : DishDetailsDTO = new DishDetailsDTO()

  constructor(private backend:MainServiceService , private router:Router,public route : ActivatedRoute 
    , private toastr:ToastrService , private spinner:NgxSpinnerService) { }

    ngOnInit(){
      this.route.paramMap.subscribe((params: ParamMap) => {
        let parmId = params.get('dishId')
        if(parmId != null)
        this.dishId = parseInt(parmId)
      });
  
      this.spinner.show()
      this.backend.DishDetails(this.dishId).subscribe(res=>{
        this.spinner.hide()
        this.dto = res
      },err=>{
        this.spinner.hide()
        this.toastr.error('Failed To Load Dish')
        this.router.navigate(['/Dish'])
      })
    }

}
