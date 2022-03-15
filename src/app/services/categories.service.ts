import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  
  
  //produccion
  //private URL = 'https://api.sorteandorest.com.ar/api/'
  
  //desarrollo
  private URL = 'http://localhost:3000/api/'


  getAllCategory(){
    return this.http.get<any>(this.URL + 'category');
  }

  getCategoryById(id:any){
    return this.http.get<any>(this.URL + `post/categoryFiltrer/${id}`)
  }
}
