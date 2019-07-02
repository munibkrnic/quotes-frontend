import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(public auth: AuthService,
              public router: Router) { }

  ngOnInit() {

    // ako ne zelimo komponentu da prikazemo kad korisnik nije ulogovoan

    if (this.auth.isLoggedIn()){
      this.router.navigateByUrl('');
    }
  }

  login(){
    this.auth.login(this.user).subscribe(data => { 
      if(data.status == 0){
        localStorage.setItem('quotes-token', data.token);
        this.router.navigateByUrl('');
      }
    })
  }

}
 