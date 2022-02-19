import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';


@Component({
  selector: 'app-publicacion-sorteo',
  templateUrl: './publicacion-sorteo.component.html',
  styleUrls: ['./publicacion-sorteo.component.scss'],
})
export class PublicacionSorteoComponent implements OnInit {

  constructor(public publi:PublicacionService) { }
  
  publicaciones:any

  ngOnInit() {

    this.getAllpost()

  }


  getAllpost(){
    this.publi.getAllPost()
      .subscribe (res => {
        this.publicaciones = res;
        console.log(this.publicaciones)
      },
      err =>{
        console.log(err);
      })
  }

}
