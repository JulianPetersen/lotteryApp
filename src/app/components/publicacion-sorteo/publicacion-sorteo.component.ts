import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-publicacion-sorteo',
  templateUrl: './publicacion-sorteo.component.html',
  styleUrls: ['./publicacion-sorteo.component.scss'],
})
export class PublicacionSorteoComponent implements OnInit {

  constructor(public publi:PublicacionService, public loader:LoadingController) { }
  
  publicaciones:any
  loading: any;

  async ngOnInit() {
    await this.presentLoading();
    this.getAllpost();
  }  

  async presentLoading(){
    this.loading = await this.loader.create({
      message: 'Cargando...'
    });
    return this.loading.present();
  }

  async getAllpost(){
    this.publi.getAllPost()
      .subscribe (res => {
        this.publicaciones = res;
        console.log(this.publicaciones)
        this.loading.dismiss();
      },
      err =>{
        console.log(err);
      })
  }

}
