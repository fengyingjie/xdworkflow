import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.less']
})
export class NewQuestionComponent implements OnInit {

  shouldRun = 'ee';//[/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor() { }

  ngOnInit() {
  }

}
