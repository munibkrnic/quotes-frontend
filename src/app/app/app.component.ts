import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quotes-frontend';

  constructor(public auth: AuthService,
              public router: Router) { }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }

  logout(){
    localStorage.removeItem('quotes-token');
    this.router.navigateByUrl('');
  }
}
