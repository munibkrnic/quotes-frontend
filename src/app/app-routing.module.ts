import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesSingleComponent } from './quotes-single/quotes-single.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// ovdje dodajemo rute
const routes: Routes = [
  { path:'', component: QuotesComponent },
  { path: 'home', component: QuotesComponent },
  { path: 'create', component: QuotesSingleComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // 
  exports: [RouterModule]
})
export class AppRoutingModule { }
