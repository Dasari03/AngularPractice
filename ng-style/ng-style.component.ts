import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blueOrRed(){
    return Math.random() > 0.5? 'blue' : 'red';
  }

}
