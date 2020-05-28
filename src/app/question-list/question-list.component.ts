import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  title: string;
  date: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: '月度教学计划审议', date: '2020/5/26~2020/6/20', status: '审批中'},
  {title: '李磊的毕业论文答辩', date: '2020/5/26~2020/6/20', status: '已承认'},
  {title: '张华的毕业论文答辩', date: '2020/5/26~2020/6/20', status: '已驳回'},
  {title: '王益的毕业论文答辩', date: '2020/5/26~2020/6/20', status: '已驳回'},
  {title: '信息学院季度事务用品采购申请', date: '2020/5/26~2020/6/20', status: '已承认'}

];

@Component({
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.less']
})

export class QuestionListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'date', 'status'];
  dataSource = ELEMENT_DATA;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToNewQuestion(){
    this.router.navigate(['newquestion']);
  }

}
