import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-post',
  templateUrl: './lottery-post.page.html',
  styleUrls: ['./lottery-post.page.scss'],
})
export class LotteryPostPage implements OnInit {

  constructor() { }
  
  file: File;
  photoSelected:string | ArrayBuffer;

  ngOnInit() {
  }

  onPhotoSelected(event): void{
    if(event.target.files && event.target.files[0]){
      this.file =<File> event.target.files[0];
      //imagepreview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result
      reader.readAsDataURL(this.file)
    }
  }

}
