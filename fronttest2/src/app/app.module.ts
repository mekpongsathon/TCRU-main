import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './content/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowempComponent } from './content/showemp/showemp.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ProductviewComponent } from './content/productview/productview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { UniqueUsernameValidatorDirective } from './shared/service/unique-username-validator.directive';
import { CommonModule } from '@angular/common';
import { CompareValidatorDirective } from './shared/service/compare-validator.directive';
import { UniqueEmailValidatorDirective } from './shared/service/unique-email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    RegisterComponent,
    ShowempComponent,
    ProductviewComponent,
    UniqueUsernameValidatorDirective,
    CompareValidatorDirective,
    UniqueEmailValidatorDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MessagesModule,
    MessageModule,
    CommonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
