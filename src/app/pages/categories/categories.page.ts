import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(public cat:CategoriesService,
              public router:Router) { }


  categorys:any[];


  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){  
    this.cat.getAllCategory()
      .subscribe(res => {
        console.log(res);
        this.categorys = res;
      })
  }


  selectdCategory(id:any){
    console.log(id);
    this.router.navigate(['/category-selected/',id])
  }
  

}
