import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { GlobalesService } from 'src/app/services/globales.service';

@Component({
  selector: 'app-category-selected',
  templateUrl: './category-selected.page.html',
  styleUrls: ['./category-selected.page.scss'],
})
export class CategorySelectedPage implements OnInit {


  id:any;

  constructor(public cat:CategoriesService,
              private route:ActivatedRoute,
              private global:GlobalesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCategoriesById();
  }

  postByCategories:any;


  getCategoriesById(){
    this.global.presentLoading('Cargando...')
    this.cat.getCategoryById(this.id)
      .subscribe(res => {
        setTimeout(() =>{
          this.global.loadingController.dismiss();
        },1000)
        this.postByCategories = res;
        console.log(this.postByCategories);
      })
  }

}
