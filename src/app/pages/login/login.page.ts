import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: '',
  };
      
  cabecera = new HttpHeaders();

  constructor(
              private router:Router, 
              private menuCtrl:MenuController,
              private authservice:AuthService) { }
    

  ngOnInit() {
    this.menuCtrl.enable(false)
  }

  signIn(){
    
    this.authservice.signIn(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
        }
      )
  }
  
  


}
