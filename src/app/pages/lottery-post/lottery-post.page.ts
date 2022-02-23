import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { CategoriesService } from 'src/app/services/categories.service';



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
  categorys:any[] = [];




  constructor(public post:PublicacionService, 
              public category:CategoriesService) { }
  
  ngOnInit() {
      this.getAllCategory();
  }


  uploadPhoto(){
    this.post.createPost(this.newPost.description, this.newPost.SocialLink,this.categorys[0]._id,this.file)
      .subscribe ( 
        res => {console.log(res),
        err => console.log(err)
      });
  }


//saco una foto con la camara.
  async selectImage(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Uri,
    }).then  (async (imageData) => {

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

//obtengo todas las categorias

getAllCategory(){
  this.category.getAllCategory()
    .subscribe(res => {
      this.categorys = res;
      console.log(res);
    })
}


}
