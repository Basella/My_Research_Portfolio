import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-undergrad-docs',
  templateUrl: './undergrad-docs.component.html',
  styleUrls: ['./undergrad-docs.component.scss']
})
export class UndergradDocsComponent implements OnInit {
transcript: boolean;
statement: boolean;
  constructor() { }

  ngOnInit() {
  }

  isTranscript() {
    console.log('hi')
    console.log('transcript is: ', this.transcript)
    this.transcript = true;
  }

  isStatement() {
    this.statement = true;
  }

}
