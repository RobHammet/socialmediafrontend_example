import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  constructor( 
      private formBuilder : FormBuilder,
      private httpClient : HttpClient,
      private router : Router 
    ) {
        this.form = this.formBuilder.group({username: '',password: ''});
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: '',
        password: ''
      }
    );
  }

  submit():void {

    let jsonString : string = JSON.stringify(this.form.getRawValue());
    
    console.log(jsonString);

    this.httpClient.post('http://localhost:8080/login', jsonString, {withCredentials: true})
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
        
      });


  }

}
