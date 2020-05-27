import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  password:string = '';
  hide:string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
