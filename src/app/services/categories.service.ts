import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  private URL = 'https://appversion2.herokuapp.com/api/'



  getAllCategory(){
    return this.http.get<any>(this.URL + 'category');
  }

  getCategoryById(id:any){
    return this.http.get<any>(this.URL + `post/categoryFiltrer/${id}`)
  }
}
