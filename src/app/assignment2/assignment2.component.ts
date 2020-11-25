import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  username = '';

  constructor() { } 

  checkUsername() {
    if (this.username.length !== 0) {
      return true;
    }
  }

  resetUsername() {
    return this.username = '';
  }

}
