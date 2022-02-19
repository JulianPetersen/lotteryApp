import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Publicacion } from '../models/publicacion';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  
  private URL = 'http://localhost:3000/api/'
  
  constructor(private http:HttpClient, private auth:AuthService) { }


  getAllPost(){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.auth.getToken()}`
    })
    return this.http.get<any>(this.URL + 'post', {headers});
  }

}
