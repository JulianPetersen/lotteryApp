import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  

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
    
  }
}
