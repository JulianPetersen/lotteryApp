import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  //produccion
  //private URL = 'https://api.sorteandorest.com.ar/api/'
  
  //desarrollo
  private URL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient, private router: Router) { }
  

  singUp(user){
    return this.http.post<any>(this.URL + 'auth', user);
  }
  
  
  signIn(user){
    return this.http.post<any>(this.URL + 'auth/singin',user)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('idUser')
    this.router.navigate(['/login'])
  }
}
