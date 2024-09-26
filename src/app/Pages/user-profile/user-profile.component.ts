import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { GetUserDetailsDTO } from 'src/app/dto/backend-DTOs/GetUserDetailsDTO';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { UpdateUserDTO } from 'src/app/dto/backend-DTOs/UpdateUserDTO';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  
  dto : GetUserDetailsDTO = new GetUserDetailsDTO()

  constructor(private backend:MainServiceService , private router:Router,public route : ActivatedRoute 
    , private toastr:ToastrService,public dialog: MatDialog , private spinner:NgxSpinnerService) {
    
     }

    ngOnInit(){
    this.spinner.show();
    let userId = localStorage.getItem('userId');
    if (userId != null)
      this.backend.GetUserDetails(parseInt(userId)).subscribe(
        (res) => {
          this.spinner.hide();
          this.dto = res;
        },
        (err) => {
          this.spinner.hide();
        }
      );
    else this.spinner.hide();
    }


    UpdateProfile(item: GetUserDetailsDTO | undefined) {
      const dialogres = this.dialog.open(UpdateUserComponent, {
      width: '1200px',
      data: item
    });

}
}
