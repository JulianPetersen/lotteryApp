import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient, private router: Router) { }
  

  singUp(user){

    return this.http.post<Users>(this.URL + 'auth', user);
  }
  
  
  signIn(user){
    return this.http.post<Users>(this.URL + 'auth/singin',user)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
