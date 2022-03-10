import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  private URL = 'http://vps-2437696-x.dattaweb.com:3000/api/'



  getAllCategory(){
    return this.http.get<any>(this.URL + 'category');
  }

  getCategoryById(id:any){
    return this.http.get<any>(this.URL + `post/categoryFiltrer/${id}`)
  }
}
