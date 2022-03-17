import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { CategoriesService } from 'src/app/services/categories.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { Router } from '@angular/router';
import { GlobalesService } from 'src/app/services/globales.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  
  

  file:File;
  imagenSelected:any
  urlImagenSelected:string 

  loading:any;
  
  

  user:any  = {
    username: '',
    imgProfile:''
  }

  @Input() id: string
  constructor(public modalController: ModalController,
              private auth: AuthService,
              public post:PublicacionService, 
              public category:CategoriesService,
              public alertController: AlertController,
              public storage:StorageServiceService,
              private loader:LoadingController,) { }
  
              
  ngOnInit() {
    
    this.obtainUser();
  }

  obtainUser(){
    this.auth.obtainUser(this.id)
      .subscribe(res => {
        this.user.username = res.username
        this.user.imgProfile = res.imgProfile
      })
  }

  cerrarModal(){
   this.modalController.dismiss();
  }


  update(){
    this.auth.updateUser(this.id, this.user)
      .subscribe(res => {
        console.log(res);
      })
      this.modalController.dismiss();
  }




  //#region "Camera Photo and upload"
//saco una foto con la camara.
async selectImage(){
  const image = await Camera.getPhoto({
    quality:90,
    resultType: CameraResultType.Uri,
    source: CameraSource.Prompt,
    
  })
  .then  (async (imageData) => {
    this.readAsBase64(imageData);
  }, (err) => {
    console.log('error: ', err)
  })
}

//transformo la foto que saque con la camara a base64
private async readAsBase64(photo: Photo) {
  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  this.file = this.blobToFile(blob,'Foto')
  this.cargarImagen();
  console.log(this.file)
}

//transformo la foto a tipo File, para poder enviarla al servidor.
public blobToFile(theBlob, fileName){       
  return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
}

//cargando imagen a firebase
cargarImagen(){
this.presentLoading();
let archivo = this.file;
let reader = new FileReader();

reader.readAsDataURL(archivo);
reader.onloadend = () => {
  console.log(reader.result)
  this.imagenSelected = reader.result
  this.storage.subirImagen('ImageFile' + "_" + Date.now(), reader.result).then(urlImagen => {
    this.urlImagenSelected = urlImagen
    console.log(this.urlImagenSelected);
    this.user.imgProfile = this.urlImagenSelected
    console.log(this.user.imgProfile)
    this.loading.dismiss();
  })
}
}

//#endregion "Camera Photo and upload"
async presentLoading() {
  this.loading = await this.loader.create({
    message: 'cargando...',
    //duration: 2000
  });
  return this.loading.present();
}

}
