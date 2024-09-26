import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { EditDishDTO } from 'src/app/dto/backend-DTOs/EditDishDTO';
import { UserDishDTO } from 'src/app/dto/backend-DTOs/UserDishDTO';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent {
  input:EditDishDTO = new EditDishDTO()
  file: File | undefined;
  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService ,public dialogRef: MatDialogRef<UpdateDishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDishDTO ) { }

    onFileSelected(event: any) {
      if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];
      }
    }

    SaveInfo(){
    this.input.id  = this.data.id
    this.input.image = ''
    this.input.name = this.data.name
    this.input.description=this.data.description
    if(this.input.name == undefined || this.input.name ==''){
      this.toastr.warning('Title Is Required')
      return;
    }
    if(this.input.description == undefined || this.input.description ==''){
      this.toastr.warning('Description Is Required')
      return;
    }
    if (this.file == undefined) {
      this.input.image = '';
    }else{
      this.spinner.show()
      this.backend.uploadImage(this.file).subscribe(res=>{
        this.spinner.hide();
        this.input.image = res
        this.spinner.show()
        this.backend.EditDish(this.input).subscribe(res=>{
          this.spinner.hide()
          this.toastr.success('Updated Successfully')
          this.dialogRef.close()
          //this.router.navigate(['/manage-blog-client'])
        },err=>{
          this.spinner.hide()
          this.toastr.error('Failed To Update Dish')
          this.dialogRef.close()
        })
      },err=>{
        this.spinner.hide();
        return;
      })
    }
    }
    }

