import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categories: Categories[] = [
    {id:"1", title:"Ropa e Indumentaria", icon:"shirt"},
    {id:"1", title:"Electronica", icon:"desktop"},
    {id:"1", title:"Deportes", icon:"tennisball"},
    {id:"1", title:"Muebles y Hogar", icon:"home"},
    {id:"1", title:"Celulares", icon:"phone-portrait"}
  ]

}
