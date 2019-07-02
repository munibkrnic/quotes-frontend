import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/Quote';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];
  selectedQuote: Quote = new Quote(); // ovaj dio smo dodali  poslije jednako da se ne bi javljala greska undifinied
    /*{ quoteID: 1, quoteBy: 'Aleksandar', quoteText: 'First quote', quoteDate: new Date()},
    { quoteID: 2, quoteBy: 'Aleksandar', quoteText: 'Second quote', quoteDate: new Date()}
    
  ];


  selectedQuote: Quote = {
    quoteBy: 'Aleksandar',
    quoteID: 1,
    quoteText: 'First Quote',
    quoteDate: new Date()
  };*/


  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
// ovdje ce biti glavno dovlacenje podataka
    this.quoteService.getAllQuotes().subscribe(data => {
      // data je ustvari Quote[] objekat, a to smo i trazili
      this.quotes = data; // 
    })

  }

}
