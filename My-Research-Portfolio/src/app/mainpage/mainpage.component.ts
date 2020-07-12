import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
currentYear: number;
  constructor() { }

  ngOnInit(): void {
    const now = new Date();
    this.currentYear = now.getUTCFullYear();
  }

}
