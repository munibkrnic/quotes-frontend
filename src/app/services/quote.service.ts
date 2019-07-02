import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';   // rxjs - reaktivno programiranje, reaguje na priomjene nad podacima - veza sa Observable 
import { Quote } from '../models/Quote';
import { environment } from '../../environments/environment';

@Injectable({  // ovo je dekorater koji znaci da se moze ukljuciti, mozemo da uzmemo sadrzaj i da ga ubrizgamo negdje gdje nam je potrebno
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: HttpClient) { }  // dependency injection - smisao mu je da mozemo dinamicki indzektujemo jedan objekat u drugi

  public getAllQuotes (): Observable<Quote[]> {
    let token = localStorage.getItem('quotes-token'); // uzimanje tokena
    return this.http.get<Quote[]>(`${environment.apiUrl}/quote`,{
      headers: {
        Authorization: `Bearer ${token}`  // ovdje stavljamo od zaglavlja bilo sto nam treba;;; Bearer ima znacenje nosioca, nosilac autorizacije je token
      }
    });  // get pravi zahtjev na url i onda vraca observable od nekog niza quote
  }

  public getQuoteById(id:number): Observable<Quote>{
    return this.http.get<Quote>(`${environment.apiUrl}/quote/${id}`); // da umetnemo neki podataak iz koda koristimo ID 
  }


  public createQuote(quote: Quote) : Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/quote`, quote);
  }


  public updateQuote(quote: Quote): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/quote`, quote);
  }

  public deleteQuote(id: Quote): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/quote/${id}`);
  }


}
