import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostComponent } from '../post/post.component';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  fileName : string = '';
  postText : string = '';


  constructor( private httpClient : HttpClient ) {                 
                }

  ngOnInit(): void {

  }

  createPost(): void {

    
    let newPost : Post = {
      text: this.postText,
      id: 0,
      userId: 0,
      createdAt: null,
      postPhoto: null
    }


    alert(this.postText);
    alert(newPost.text);

    let jsonString : string = JSON.stringify(newPost);
    console.log(jsonString);


    this.httpClient.post("http://localhost:8080/api/post", jsonString, {withCredentials: true})
    .subscribe( res=>{
      console.log(res);
      alert(res);
    },
    err=> {
      console.log(err);
    });

    

  }


    onFileSelected(event : any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);
            
          //  var xx = formData.get("thumbnail");
            
            const upload$ = this.httpClient.post<any>("http://localhost:8080/api/upload", formData , {withCredentials: true});

            upload$.subscribe();

            document.querySelector("#fileUpload")?.setAttribute("value", "");

        }


    }

}
