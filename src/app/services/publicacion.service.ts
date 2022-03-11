import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  
  private URL = 'https://api.sorteandorest.com.ar/api/'

  constructor(private http:HttpClient, private auth:AuthService,) { }


  getAllPost(){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.auth.getToken()}`
    })
    return this.http.get<any>(this.URL + 'post', {headers});
  }


  createPost( description:string, socialLink:string, category:any, imgUrl:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.auth.getToken()}`
    })
    const fd =  new FormData();
    fd.append('description', description),
    fd.append('socialLink', socialLink),
    fd.append('category', category)
    fd.append('imgUrl', imgUrl)
    return this.http.post(this.URL + 'post',fd,{headers})
  }

}


