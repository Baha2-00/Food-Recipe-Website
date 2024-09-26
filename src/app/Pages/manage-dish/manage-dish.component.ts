import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { DishTestDto } from 'src/app/dto/Dishs/DishTestDto';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogData } from 'src/app/dto/confirmDialog/conifrmdialog';
import { EditDishDTO } from 'src/app/dto/backend-DTOs/EditDishDTO';
import { UpdateDishComponent } from '../update-dish/update-dish.component';
import { UserDishDTO } from 'src/app/dto/backend-DTOs/UserDishDTO';

@Component({
  selector: 'app-manage-dish',
  templateUrl: './manage-dish.component.html',
  styleUrls: ['./manage-dish.component.css']
})
export class ManageDishComponent {

  displayedColumns: string[] = [
    'id',
    'name',
    'desc',
    'date',
    'status',
    'Actions',
  ];
  dataSource: MatTableDataSource<UserDishDTO>;
  dishArray: UserDishDTO[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  @ViewChild(MatSort) sort: MatSort;

  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService,public dialog: MatDialog) {

    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
     }


     ngOnInit(){
    this.spinner.show();
    let userId = localStorage.getItem('userId');
    if (userId != null)
      this.backend.GetUserDishByUserId(parseInt(userId)).subscribe(
        (res) => {
          this.spinner.hide();
          this.dishArray = res;
          this.dataSource.data = this.dishArray;
        },
        (err) => {
          this.spinner.hide();
        }
      );
    else this.spinner.hide();
    //fill table
     }

     ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    LogoutFuncationaity() {
      this.backend.Logout();
    }

    backToHome() {
      this.router.navigate(['']);
    }
  


    CreateNewDish(){
      this.router.navigate(['/create-dish']);
    }

    EditDish(item:EditDishDTO){
      this.dialog.open(UpdateDishComponent, {
        width: '700px',
        data:item
      });
    }

    DeleteDish(dishId: number){
      let info = new ConfirmDialogData(
        'Are You Sure ?',
        'Are You Want To Delete This Dish'
      );
      const dialogres = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: info,
      });
  
      dialogres.afterClosed().subscribe((result) => {
        if (result) {
          this.spinner.show();
          this.backend.DeleteDish(dishId).subscribe(
            (res) => {
              this.spinner.hide();
              this.toastr.success('deleted succefully');
              let userId = localStorage.getItem('userId');
              if (userId != null)
                this.backend.GetUserDishByUserId(parseInt(userId)).subscribe(
                  (res) => {
                    this.spinner.hide();
                    this.dishArray = res;
                    this.dataSource.data = this.dishArray;
                  },
                  (err) => {
                    this.spinner.hide();
                  }
                );
            },
            (err) => {
              this.spinner.hide();
              this.toastr.error('delete failed');
            }
          );
        } else {
        }
      });

    }
  }
    
