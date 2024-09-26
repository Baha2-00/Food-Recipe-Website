import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { MainServiceService } from "src/app/backend/main-service.service";
import { DishDTO } from "src/app/dto/backend-DTOs/DishDTO";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  dishes: DishDTO[] = [];
  paginatedDishes: DishDTO[] = [];
  page: number = 1;
  limit: number = 9; // Number of dishes per page
  totalPages: number = 0;

  constructor(
    private backend: MainServiceService, 
    private router: Router, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(){
    this.loadDishes();
  }

  // Load all dishes at once
  loadDishes() {
    this.spinner.show();
    this.backend.GetAllDishes().subscribe(
      res => {
        this.dishes = res;  // Load all dishes at once
        this.totalPages = Math.ceil(this.dishes.length / this.limit);
        this.updatePaginatedDishes();
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error('Something Went Wrong');
      }
    );
  }

  // Get the dishes for the current page
  updatePaginatedDishes() {
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;
    this.paginatedDishes = this.dishes.slice(start, end);
  }

  NavigteToDetails(id: number | undefined) {
    if (id != undefined) this.router.navigate(['/details', id]);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatePaginatedDishes();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePaginatedDishes();
    }
  }
}
