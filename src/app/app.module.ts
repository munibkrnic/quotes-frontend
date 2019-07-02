import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesTableComponent } from './quotes-table/quotes-table.component';
import { QuotesSingleComponent } from './quotes-single/quotes-single.component';

//import { FileSelectDirective } from 'ng2-file-upload';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesTableComponent,
    QuotesSingleComponent,
   // FileSelectDirective,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
