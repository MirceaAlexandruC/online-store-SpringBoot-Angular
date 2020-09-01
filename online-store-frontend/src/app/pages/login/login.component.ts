import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel = {
    username: '',
    password: '',
    email: ''
  };
 constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  sendFeedback(): void {
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred while sending feedback");
      }
    );
  }

}

}
export interface LoginModel {
  username: string;
  email: string;
  password: string;
}
