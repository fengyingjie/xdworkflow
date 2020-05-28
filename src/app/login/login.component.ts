import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  password:string = '';
  hide:string = '';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  /**
   * 費目マスタ画面への遷移
   * @param expenseCode: 費目コード
   */
  goToQuestionList(expenseCode: string): void {

    this.router.navigate(['questionList']);
  }

}
