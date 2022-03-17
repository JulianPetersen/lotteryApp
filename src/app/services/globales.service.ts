import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class GlobalesService {
  constructor(
              public alertController: AlertController,
              public loadingController: LoadingController,) { }


 async openBrowser(url:string){
    await Browser.open({ url: url });
  }


  async presentLoading(message:string) {
    const loading = await this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: message,
      //translucent: true,
      //cssClass: 'custom-class custom-loading',
    });
    return await loading.present();
  }


  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({

      header: 'Atencion',
      message: 'Está suguro que desea eliminar el post?',
      buttons: [
      {
        text: 'Cancel',
        handler: (blah) => {
          console.log('cancelar');
        }
      },
      {
        text: 'Ok',
        handler: (blah) => {
          console.log('boton ok');
        }
      }
    ]
    });

    await alert.present();
  }
 
}

