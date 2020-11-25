import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  showDetails = false;
  log = [];

  constructor() { 
    this.showDetails = false;
  }

  onToggle() {
    this.showDetails = !this.showDetails;
    this.log.push(new Date());

  }
  

  
}
