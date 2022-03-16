import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalesService } from 'src/app/services/globales.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {


  id:any;
  publicaciones:any


  constructor(private route:ActivatedRoute, private post:PublicacionService, private global:GlobalesService,public alertController: AlertController) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getpostByUser();
  }
  
  async deletePost(id){
    const alert = await this.alertController.create({

      header: 'Atencion',
      message: 'Está suguro que desea eliminar el post?',
      buttons: [
      {
        text: 'Cancel',
        handler: () => {
          console.log('cancelar');
        }
      },
      {
        text: 'Ok',
        handler: (blah) => {
          this.post.deletePost(id)
          .subscribe(res => console.log(res))
          this.ngOnInit();
        }
      }
    ]
    });

    await alert.present();
    
    
  }

  getpostByUser(){
    this.post.getPostByUser(this.id)
      .subscribe (res => {
        this.publicaciones= res
        console.log(this.publicaciones)
      })
  }
}
