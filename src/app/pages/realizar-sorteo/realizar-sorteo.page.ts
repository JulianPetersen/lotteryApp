import { Component, OnInit } from '@angular/core';
import { GlobalesService } from 'src/app/services/globales.service';
import { IgCommentsService } from 'src/app/services/ig-comments.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-realizar-sorteo',
  templateUrl: './realizar-sorteo.page.html',
  styleUrls: ['./realizar-sorteo.page.scss'],
})
export class RealizarSorteoPage implements OnInit {


  LinkIg:string;
  comentarios:any[] = []
  ganador;
  ganador2;

  sorteado:boolean = false;

  errorLink:boolean = false;

  constructor(private comments:IgCommentsService, private global:GlobalesService) { }

  ngOnInit() {
  }


  getcommentIg(){
    
    this.global.presentLoading('Sorteando...')
    const idPost = this.LinkIg.split('/')
    this.comments.getCommentsIg(idPost[4])
      .subscribe(res => {
        this.global.loadingController.dismiss()
        this.comentarios = res.comments
        console.log(this.comentarios)
        this.elegirGanador();
        this.sorteado = true
      },
      err => {
        console.log(err.error.message)
        this.global.loadingController.dismiss()
        this.errorLink=true;
      })
      
  }


  elegirGanador(){
    const ganador = this.comentarios[Math.floor(Math.random()* this.comentarios.length)]
    this.ganador = ganador
    this.errorLink=false;
    console.log(this.ganador)
  }

  elegir2ganadores(){
    const ganador1 = this.comentarios[Math.floor(Math.random() * this.comentarios.length)]
    this.ganador = ganador1;
    do{
      const ganador2 = this.comentarios[Math.floor(Math.random() * this.comentarios.length)]
      this.ganador2 = ganador2;
    }while(this.ganador === this.ganador2){
      const ganador2 = this.comentarios[Math.floor(Math.random() * this.comentarios.length)]
      this.ganador2 = ganador2;
    }
    console.log(this.ganador, this.ganador2);
  }





}
