import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalesService } from 'src/app/services/globales.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { UpdateUserComponent } from 'src/app/components/update-user/update-user.component';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {


  id:any;
  publicaciones:any
  user:any;

  constructor(private route:ActivatedRoute,
              private post:PublicacionService, 
              private global:GlobalesService,
              public alertController: AlertController,
              public auth:AuthService,
              public modalController: ModalController) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getpostByUser();
    this.obtainUser();
  }

  obtainUser(){
    this.auth.obtainUser(this.id)
      .subscribe(res => {
        this.user = res
        console.log(res)
      })
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
    this.global.presentLoading('Cargando...')
    this.post.getPostByUser(this.id)
      .subscribe (res => {
        setTimeout(() =>{
          this.global.loadingController.dismiss();
        },1000)
        this.publicaciones= res
        console.log(this.publicaciones)
      })
  }

  doRefresh(event){
    setTimeout(()=> {
      this.ngOnInit();
      event.target.complete();
    }, 2000)
  }

  async presetnModal(){
    const modal = await this.modalController.create({
      component: UpdateUserComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': this.id
      }
    });
    return await modal.present();
  }
  
 
}
