import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string
  surname: string
  username: string
  password: string

  constructor() { }

  ngOnInit(): void {
  }

  register(name: string, surname: string, username: string, password: string){
    if(name == "" || name == undefined ||
       surname == "" || surname == undefined || 
       username == "" || username == undefined||
       password == "" || password == undefined){
      alert("Missing credentials provided")
    }
    else{
      alert("User: " + name + " registered")
    }
  }
}
