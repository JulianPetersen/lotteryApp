import { Component, Input, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-publicacion-sorteo',
  templateUrl: './publicacion-sorteo.component.html',
  styleUrls: ['./publicacion-sorteo.component.scss'],
})
export class PublicacionSorteoComponent implements OnInit {

  constructor(public publi:PublicacionService, public loader:LoadingController) { }
  
  @Input() publicaciones:any

  async ngOnInit() {
    
  }  


  

}
