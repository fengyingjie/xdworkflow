import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.less']
})
export class NewQuestionComponent implements OnInit {

  shouldRun = 'ee';//[/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  movies = [
    {'type':'text1'},
    {'type':'text2'},
    {'type':'text3'},
    {'type':'text4'},
    {'type':'text5'},
    {'type':'text6'},
    {'type':'text7'},
    {'type':'text1'},
    {'type':'text2'},
    {'type':'text3'},
    {'type':'text4'},
    {'type':'text5'},
    {'type':'text6'},
    {'type':'text7'},
    {'type':'text1'},
    {'type':'text2'},
    {'type':'text3'},
    {'type':'text4'},
    {'type':'text5'},
    {'type':'text6'},
    {'type':'text7'},
    {'type':'text8'}
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<{}[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
