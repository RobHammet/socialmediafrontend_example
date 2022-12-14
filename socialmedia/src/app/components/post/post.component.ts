import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    @Input() post: Post;


  constructor() {
    this.post = this.getNewPost();

   }

  ngOnInit(): void {
      this.post.text = "AAAAAAAAAAA";
  }

  getNewPost(): Post {
    let newPost : Post = {
      id : 0,
      text : "",
      userId : 0,
      createdAt : null,
      postPhoto : null
    }
    return newPost;
  }


}
