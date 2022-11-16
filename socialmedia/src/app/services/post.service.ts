import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL: string = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }


  getFeed(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseURL + "/posts");
  }


}
