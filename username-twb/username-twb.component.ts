import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-twb',
  templateUrl: './username-twb.component.html',
  styleUrls: ['./username-twb.component.css']
})
export class UsernameTWBComponent implements OnInit {
typedUsername = ''
  constructor() { }

  ngOnInit(): void {
  }
  isUsernameTyped(): boolean{
    if(this.typedUsername.length > 0){
      return false
    }else return true;
  }

  clearUsername(){
    this.typedUsername = "";
  }

}
