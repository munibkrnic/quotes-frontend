import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(public authService: AuthService,
              public router: Router) { }  // ovo dio je kada obavimo registraciju da nas vrati na pocetnu stranu

  ngOnInit() {
  }

  register(){
    this.authService.register(this.user).subscribe(data => {
      if (data.status == 0){
        //debugger; // break point u kodu
        console.log(data.token);
        localStorage.setItem('quotes-token', data.token);// jedna od varijanti za cuvanje tokena na local storage
        this.router.navigateByUrl(''); // redirekcija na pocetnu stranu
      }
    })
  }

}
