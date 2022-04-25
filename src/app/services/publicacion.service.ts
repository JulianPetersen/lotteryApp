import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  //produccion
  //private URL = 'https://api.sorteandorest.com.ar/api/'
  //desarrollo
  
  private URL = 'http://localhost:3000/api/'

  
  constructor(private http:HttpClient, private auth:AuthService,) { }


  getAllPost(){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.auth.getToken()}`
    })
    return this.http.get<any>(this.URL + 'post', {headers});
  }

  getPostByUser(id:any){
    return this.http.get<any>(this.URL + `post/userfiltrer/${id}`)
  }



  deletePost(id:any){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.auth.getToken()}`
    })
    return this.http.delete<any>(this.URL + `post/${id}`, {headers});
  }


  createPost( description:string, socialLink:string, category:any, imgUrl:string, ciudad:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.auth.getToken()}`
    })
    const fd =  new FormData();
    fd.append('description', description),
    fd.append('socialLink', socialLink),
    fd.append('category', category)
    fd.append('imgUrl', imgUrl)
    fd.append('ciudad', ciudad)
    return this.http.post(this.URL + 'post',fd,{headers})
  }

}


