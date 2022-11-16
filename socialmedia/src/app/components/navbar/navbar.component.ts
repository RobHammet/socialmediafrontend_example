import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private httpClient : HttpClient,
            private router : Router 
              ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.httpClient.post("http://localhost:8080/logout", {}, {withCredentials:true})
    .subscribe(res=>{
      console.log("res " + res);
    this.reloadPage();
      // this.router.navigate(['/login']);
    },
    err=> {
      console.log(err);
    this.reloadPage();
     // this.router.navigate(['/login']);
    });
  }

  reloadPage(): void {
   window.location.reload();
  }
}
