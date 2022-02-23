import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  user = {
    email: '',
    password: '',
    username: ''
  };


  errMail:boolean = false
  errUsername:boolean = false
  errPassword:boolean = false


  constructor(private menuCtrl:MenuController, 
              private authService: AuthService, 
              private router:Router) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }



  singUp(){
    if(this.validateData()){
      this.authService.singUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home'])
        },
        err => {
          console.log(err);
        }
      )
    }
    }
      
      

  validateData(){
    if(this.user.email == ''){
      this.errMail = true
      return false
    }else if(this.user.password == ''){
      this.errPassword = true
      return false
    }else if(this.user.username == ''){
      this.errUsername = true
      return false
    }else{
      return true
    }
    
  }
}
