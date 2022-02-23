import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

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
    
  //Data user validate
  resError: string;
  errMail:boolean = false;
  errPass:boolean = false;


  cabecera = new HttpHeaders();


 //loader
 loading:any


  constructor(
              private router:Router, 
              private menuCtrl:MenuController,
              private authservice:AuthService,
              private loader:LoadingController) { }
    

  ngOnInit() {
    this.menuCtrl.enable(false)
  }


  async presentLoading(){
    this.loading = await this.loader.create({
      message: 'Cargando...'
    });
    return this.loading.present();
  }

  async signIn(){
    if(this.validateData()){
      this.authservice.signIn(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err.error)
           this.resError = err.error;
        }
      ) 
    }
    
  }
  

  //DataUser validate
  validateData(){
    if(this.user.email ==""){
      this.errMail = true
      return false
    }else if(this.user.password == ""){
      this.errPass = true
      return false
    }else{
      return true;
    }
    
  }
  


}
