import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = 'Not logged in';
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<User>('http://localhost:8080/api/user', {withCredentials: true}).subscribe(
      res=>{
        console.log(res);
        this.message = 'Hi, there ' + res.username + '!';
      },
      err=> {
        console.log(err);
        this.message = 'Not logged in';
      }
    );
  }

}
