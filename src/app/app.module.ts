import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base-component/app.component';
import { MainComponent } from './Pages/main/main.component';
import { DishComponent } from './Pages/dish/dish.component';
import { DishDetailsComponent } from './Pages/dish-details/dish-details.component';
import { CreateDishComponent } from './Pages/create-dish/create-dish.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { ErrorComponent } from './Pages/error/error.component';
import { UpdateDishComponent } from './Pages/update-dish/update-dish.component';
import { ManageDishComponent } from './Pages/manage-dish/manage-dish.component';
import { NavbarComponent } from './sharedcomponent/navbar/navbar.component';
import { FooterComponent } from './sharedcomponent/footer/footer.component';
import { ConfirmDialogComponent } from './sharedcomponent/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { SubscriptionComponent } from './Pages/subscription/subscription.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CategoryComponent } from './Pages/category/category.component';
import { CuisineComponent } from './Pages/cuisine/cuisine.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { UpdateUserComponent } from './Pages/update-user/update-user.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DishComponent,
    DishDetailsComponent,
    CreateDishComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    ErrorComponent,
    UpdateDishComponent,
    ManageDishComponent,
    NavbarComponent,
    FooterComponent,
    ConfirmDialogComponent,
    SubscriptionComponent,
    AboutUsComponent,
    ContactUsComponent,
    CategoryComponent,
    CuisineComponent,
    UserProfileComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CarouselModule,
    HttpClientModule,
    FormsModule,
    AccordionModule.forRoot(),
    PaginationModule,
    MatSlideToggleModule,
    MatIconModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    BsDropdownModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
