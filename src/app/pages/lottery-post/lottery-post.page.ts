import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { CategoriesService } from 'src/app/services/categories.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-lottery-post',
  templateUrl: './lottery-post.page.html',
  styleUrls: ['./lottery-post.page.scss'],
})
export class LotteryPostPage implements OnInit {
  newPost = {
    description: '',
    SocialLink: ''
  };
  

  file:File;
  categorys:any;
  

  categorySelected:any;


  errDescription:boolean = false;
  errLink:boolean = false;
  errFile:boolean=false;
 
  constructor(public post:PublicacionService, 
              public category:CategoriesService,
              public alertController: AlertController) { }
  
  ngOnInit() {
      this.getAllCategory();
  }


//#region "http reqests"
   uploadPhoto(){
     if(this.validateData()){
      this.post.createPost(this.newPost.description, this.newPost.SocialLink,this.categorySelected,this.file)
      .subscribe ( 
        res => {console.log(res),
        err => console.log(err)
      });
     }
    }

//obtengo todas las categorias
  getAllCategory(){
    this.category.getAllCategory()
      .subscribe(res => {
        this.categorys = res;
        console.log(res);
      })
  }
  
//#endregion "http reqests"



//#region "Camera Photo and upload"
//saco una foto con la camara.
  async selectImage(){
    const image = await Camera.getPhoto({
      quality:90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
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
    console.log(this.file)
  }

//transformo la foto a tipo File, para poder enviarla al servidor.
  public blobToFile(theBlob, fileName){       
    return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
}

//#endregion "Camera Photo and upload"



validateData(){
  if(this.newPost.description == ""){
    this.errDescription = true;
    return false
  }else if(this.newPost.SocialLink == ""){
    this.errLink = true;
    return false;
  }else if(this.file == null || undefined){
    this.errFile = true;
    return false;
  }else{
    return true;
  }
}


setCategory(){
  console.log(this.categorySelected)
}
}



