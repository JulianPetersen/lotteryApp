import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {}


  selectedUserId(){
    let idUsuario = localStorage.getItem('idUser')
    this.router.navigate(['/my-account/', idUsuario])
  }

  logout(){
    this.auth.logOut();
  }
}
