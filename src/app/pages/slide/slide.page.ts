import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  page1:boolean = true;
  page2:boolean = false;
  page3:boolean = false;


  mostrarPagina2(){
    this.page1 = false;
    this.page2 = true;
  }

  goToRegistration(){
    this.router.navigateByUrl('/register')
    localStorage.setItem('flag', 'true')
  }

}
