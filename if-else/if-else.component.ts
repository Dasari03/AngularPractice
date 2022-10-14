import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {
  showingCondition = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  updateCondition(){
    this.showingCondition = !this.showingCondition;
  }
}
