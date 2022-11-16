import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts : Post[] = [];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getFeed().subscribe(res=> {
      this.posts = res;
    });
  }

}
