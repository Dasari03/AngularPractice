import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
specialParagraph = "Secret Password = tuna";
buttonClicked = false;
btnClicked:number[] = [];
btnClickCount = 0;
  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(){
    this.buttonClicked = !this.buttonClicked;
    // return this.buttonClicked
    this.btnClickCount++;
    this.btnClicked.push(this.btnClickCount)
    
  }
  clkBigEnough():boolean{
    if(this.btnClicked.length >=5) return true;
    else return false;
  }

}
