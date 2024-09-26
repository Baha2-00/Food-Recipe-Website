import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-subcription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.html']
})
export class SubscriptionComponent {
  constructor(private backend:MainServiceService , private router:Router, private toastr:ToastrService ,
    private spinner:NgxSpinnerService) { }
}
