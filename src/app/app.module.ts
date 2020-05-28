import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatTableModule,
  MatSidenavModule,
  MatRadioModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    QuestionListComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatTableModule,
    MatSidenavModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class AppModule { }
