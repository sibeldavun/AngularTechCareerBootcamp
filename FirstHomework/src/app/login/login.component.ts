import { Component, OnInit } from '@angular/core';
import { GeneralModel } from '../general-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  model = new GeneralModel();

  constructor() { }

  ngOnInit(): void {
  }

  login(username:string, password:string){
    if(username == "" || username == undefined||
       password == "" || password == undefined){
      alert("Missing credentials provided")
    }
    else{
      let user = this.model.Users.filter(x=>x.Username == this.username && x.Password == this.password);
      if(user.length == 0){
        alert("Wrong credentials");
      }else{
        alert("Login successful");
      }
    }
  }
}
