import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pages/main/main.component';
import { DishComponent } from './Pages/dish/dish.component';
import { DishDetailsComponent } from './Pages/dish-details/dish-details.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { CreateDishComponent } from './Pages/create-dish/create-dish.component';
import { ManageDishComponent } from './Pages/manage-dish/manage-dish.component';
import { ErrorComponent } from './Pages/error/error.component';
import { UpdateDishComponent } from './Pages/update-dish/update-dish.component';
import { SubscriptionComponent } from './Pages/subscription/subscription.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CategoryComponent } from './Pages/category/category.component';
import { CuisineComponent } from './Pages/cuisine/cuisine.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { UpdateUserComponent } from './Pages/update-user/update-user.component';
import { ConfirmDialogComponent } from './sharedcomponent/confirm-dialog/confirm-dialog.component';


const routes: Routes = [
  {
    path:'',//Main Page
    component:MainComponent
  },
  {
    path:'Dish',
    component:DishComponent
  },
  {
    path:'details/:dishId',
    component:DishDetailsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'resetpassword',
    component:ResetPasswordComponent
  },
  {
    path:'create-dish',
    component:CreateDishComponent
  },
  {
    path:'Update-Dish',
    component:UpdateDishComponent
  },  
  {
    path:'manage-dish',
    component:ManageDishComponent
  },
  {
    path:'Subscription',
    component:SubscriptionComponent
  }, 
  {
    path:'Category',
    component:CategoryComponent
  },
  {
    path:'Cuisine',
    component:CuisineComponent
  },
  {
    path:'Aboutus',
    component:AboutUsComponent
  },
  {
    path:'ContactUs',
    component:ContactUsComponent
  },
  {
    path:'User-Profile',
    component:UserProfileComponent
  },
  {
    path:'Edit-User',
    component:UpdateUserComponent
  },
  {
    path:'confirm-dialog',
    component:ConfirmDialogComponent
  }
  ,
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path:'**',
    component:ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
