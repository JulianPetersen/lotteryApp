import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private post:PublicacionService, public mnu:MenuController) {}

  publicaciones:any

  ngOnInit() {
    this.getAllpost();
    this.mnu.enable(true);
  }



  getAllpost(){
    this.post.getAllPost()
      .subscribe (res => {
        this.publicaciones = res;
        console.log(this.publicaciones);
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
}