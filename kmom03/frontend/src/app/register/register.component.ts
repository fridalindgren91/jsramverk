import { Component, OnInit } from '@angular/core';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  yearList = [];
  monthList = [];
  dayList = [];
  registerModel;
  submitted;

  constructor() {
    for (var i = 2019; i >= 1930; i--) {
      this.yearList.push(i);
    }
    for (var i = 1; i <= 12; i++) {
      this.monthList.push(i);
    }
    for (var i = 1; i <= 31; i++) {
      this.dayList.push(i);
    }

    this.registerModel = new Register("", "", "", this.yearList[0], this.monthList[0], this.dayList[0]);
    
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log('this.registerModel.name' + this.registerModel.name);
  }

  ngOnInit() {
  }

}
