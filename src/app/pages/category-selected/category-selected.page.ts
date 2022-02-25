import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-selected',
  templateUrl: './category-selected.page.html',
  styleUrls: ['./category-selected.page.scss'],
})
export class CategorySelectedPage implements OnInit {


  id:any;

  constructor(public cat:CategoriesService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCategoriesById();
  }

  postByCategories:any;


  getCategoriesById(){
    this.cat.getCategoryById(this.id)
      .subscribe(res => {
        this.postByCategories = res;
        console.log(this.postByCategories);
      })
  }

}
