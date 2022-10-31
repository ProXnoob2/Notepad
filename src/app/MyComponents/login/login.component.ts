import { Component, OnInit } from '@angular/core';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/Services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login();
  }

}
