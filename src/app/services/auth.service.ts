import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public isLoggedIn(){
    let token = localStorage.getItem('quotes-token');

    if (!token){
      return false;
    }
    let userEncryptData = token.split('.')[1];
    let user: any = JSON.parse(window.atob(userEncryptData));

    return (new Date(user.expityDate) > new Date());
  }

  public register(user: User){
    return this.http.post<any>(`${environment.apiUrl}/register`, user); // 2 parametra, prvi je user a drugi je user ovo saljemo u tijelu zahtjeva request.body
  }

  public login(user: User){
    return this.http.post<any>(`${environment.apiUrl}/login`, user);
  }

}
