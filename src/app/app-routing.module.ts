import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { NewQuestionComponent } from './new-question/new-question.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'questionList', component: QuestionListComponent },
  { path: 'newquestion', component: NewQuestionComponent }//,
  //{ path: 'additem', component: AddItemComponent },
  //{ path: 'addApprover', component: AddApproverComponent },
  //{ path: 'answerquestion', component: AnswerQuestionComponent },
  //{ path: 'approvequestion', component: ApproveQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
