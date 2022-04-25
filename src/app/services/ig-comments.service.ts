import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class IgCommentsService {

  constructor(public http:HttpClient) { }


  //produccion
  //private URL = 'https://api.sorteandorest.com.ar/api/'
  //desarrollo
  private URL = 'http://localhost:3000/api/'

  getCommentsIg(idPost:any){
    return this.http.get<any>(this.URL + `instagramcomment/${idPost}`);
  }
}
