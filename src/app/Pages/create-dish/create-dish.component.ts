import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { CreateDishDTO } from 'src/app/dto/backend-DTOs/CreateDishDTO';
import { GetCategoryDTO } from 'src/app/dto/backend-DTOs/GetCategoryDTO';
import { GetCuisineDto } from 'src/app/dto/backend-DTOs/GetCuisineDto';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent {

  attachment: File | undefined;
  input:CreateDishDTO=new CreateDishDTO()
  Category : GetCategoryDTO[]=[]
  Cusine : GetCuisineDto[]=[]


  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }


    ngOnInit() {
      this.backend.GetAllCategories().subscribe(
        res=>{
          this.spinner.hide()
          this.Category=res
          this.backend.GetAllCusines().subscribe(res=>{
            this.Cusine=res
          },err=>{
    
          }
        )
        }, err=>{
          this.spinner.hide()
          this.toastr.error('Somrthing Wrong Happened')
        }
      )
      
    }

    onFileSelected(event: any) {
      if (event.target.files && event.target.files[0]) {
        this.attachment = event.target.files[0];
      }
    }

    SaveInfo() {
      if (this.input.name == undefined || this.input.name == '') {
        this.toastr.warning('Title Is Required');
        return;
      }
      if (this.input.description == undefined || this.input.description == '') {
        this.toastr.warning('Description Is Required');
        return;
      }
      if (this.input.categoryId == undefined || this.input.categoryId == 0) {
        this.toastr.warning('categoryId Is Required');
        return;
      }
      if (this.input.cuisineId == undefined || this.input.cuisineId == 0) {
        this.toastr.warning('cuisineId Is Required');
        return;
      }
      if (this.input.ingredientName == undefined || this.input.ingredientName == '') {
        this.toastr.warning('ingredients are Required');
        return;
      }
      if (this.input.quantity == undefined || this.input.quantity == '') {
        this.toastr.warning('quantities are Required');
        return;
      }
      if (this.input.preparingStepsDescription == undefined || this.input.preparingStepsDescription == '') {
        this.toastr.warning('preparing Steps are Required');
        return;
      }
      let userId = localStorage.getItem('userId');
      if (userId == null) {
        this.toastr.warning('Must Logged In as Client');
        return;
      } else {

        this.input.userId = parseInt(userId);
      if (this.attachment == undefined) {
        this.input.image = '';
      }else{
        this.spinner.show()
        this.backend.uploadImage(this.attachment).subscribe(res=>{
          this.spinner.hide();
          this.input.image = res
          this.backend.CreateDish(this.input).subscribe(
            (res) => {
              this.spinner.hide();
              this.toastr.success('Create Dish Request Sent Successfully');
              this.router.navigate(['/manage-dish']);
            },
            (err) => {
              this.spinner.hide();
              this.toastr.error('Failed To Create Dish');
            }
          );
        },err=>{
          this.spinner.hide();
          return;
        })
      }
      

      }
    }
}
