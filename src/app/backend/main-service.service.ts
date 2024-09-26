import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubscriptionDTO } from '../dto/backend-DTOs/SubscriptionDTO';
import {DishDTO} from '../dto/backend-DTOs/DishDTO';
import { LoginDTO } from '../dto/backend-DTOs/LoginDTO';
import { SignupDTO } from '../dto/backend-DTOs/SignupDTO';
import { CreateDishDTO } from '../dto/backend-DTOs/CreateDishDTO';
import { EditDishDTO } from '../dto/backend-DTOs/EditDishDTO';
import { UpdateUserDTO } from '../dto/backend-DTOs/UpdateUserDTO';
import { GetUserDetailsDTO } from '../dto/backend-DTOs/GetUserDetailsDTO';
import { GetCategoryDTO } from '../dto/backend-DTOs/GetCategoryDTO';
import { GetCuisineDto } from '../dto/backend-DTOs/GetCuisineDto';
import { DishDetailsDTO } from '../dto/backend-DTOs/DishDetailsDTO';
import { UserDishDTO } from '../dto/backend-DTOs/UserDishDTO';



@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  private baseURL : string ='https://localhost:44332'

  constructor(private http:HttpClient , private router:Router) { }

  GetAllSubscription():Observable<SubscriptionDTO[]>{
    return this.http.get<SubscriptionDTO[]>(`${this.baseURL}/api/Shared/GetAllSubscription`)
  }

  GetAllCategories() : Observable <GetCategoryDTO[]>{
    return this.http.get<GetCategoryDTO[]>(`${this.baseURL}/api/Shared/GetAllCategories`)
  }

  GetAllCusines():Observable<GetCuisineDto[]> {
    return this.http.get<GetCuisineDto[]>(`${this.baseURL}/api/Shared/GetAllCuisines`)
  }

  GetAllDishes():Observable<DishDTO[]> {
    return this.http.get<DishDTO[]>(`${this.baseURL}/api/Shared/GetAllDishes`)
  }

  DishDetails(id:number):Observable<DishDetailsDTO> {
    return this.http.get<DishDetailsDTO>(`${this.baseURL}/api/Shared/GetDishDetails/${id}`)
  }

  GetUserDishByUserId(id:number):Observable<UserDishDTO[]> {
    return this.http.get<UserDishDTO[]>(`${this.baseURL}/api/User/GetUserDishByUserId?Id=${id}`)
  }

  GetUserDetails(id : number) : Observable <GetUserDetailsDTO>{
    return this.http.get<GetUserDetailsDTO>(`${this.baseURL}/api/Admin/GetUsersByid/${id}`)
  }

  Login(input:LoginDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/User/LoginToSite`,input,{headers,responseType:'text'})
  }

  Register(input:SignupDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/Shared/Register a new User`,input,{headers,responseType:'text'})
  }

  CreateDish(input:CreateDishDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/User/CreateNewDish`,input,{headers,responseType:'text'})
  }

  EditDish(input:EditDishDTO) : Observable<any>{
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.put(`${this.baseURL}/api/User/UpdateDish`,input,{headers,responseType:'text'})
  }

  EditUser(input:UpdateUserDTO): Observable<any>{
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.put(`${this.baseURL}/api/User/UpdateUser`,input,{headers,responseType:'text'})
  }

  DeleteDish(dishId:number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.put(`${this.baseURL}/api/User/UpdateDishActivation?Id=${dishId}&value=true`,null,{headers,responseType:'text'})
  }

  Logout(){
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    this.router.navigate([''])

  }

  ChangeDishStatus(dishId:number,status:boolean): Observable<any> {
    return this.http.put(`${this.baseURL}/api/User/UpdateDishActivation?Id=${dishId}&value=${status}`,null)
  }

  uploadImage(file: File) : Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/Files/UploadImageAndGetURL`, formData, { headers, responseType: 'text' })
  }

}
