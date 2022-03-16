import { Component } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { GlobalesService } from 'src/app/services/globales.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  publicaciones:any;

  private topLimit: number = 2;
  public dataList: any = [];
  
  constructor(private post:PublicacionService, public mnu:MenuController, private global:GlobalesService) {

  }
  
  
  ngOnInit() {
    this.mnu.enable(true);
    this.getAllpost();
  }
  
   getAllpost(){
    this.post.getAllPost()
    .subscribe ( res => {
      this.publicaciones =  res;
      console.log(this.publicaciones);
      this.dataList = this.publicaciones.slice(0, this.topLimit);
      },
      err =>{
        console.log(err);
      })
      
    }

   doRefresh(event){
    setTimeout(()=> {
      this.ngOnInit();
      event.target.complete();
    }, 2000)
  }


  loadData(event){

    setTimeout(() => {
      this.topLimit += 2;
      this.dataList = this.publicaciones.slice(0, this.topLimit)
      event.target.complete();
      
      if(this.dataList.length==this.publicaciones.length){
        event.target.disabled = true;
      }
    },500)
  }

  
}