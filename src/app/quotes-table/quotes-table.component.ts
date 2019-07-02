import { Component, OnInit, Input, Host } from '@angular/core';
import { Quote } from '../models/Quote';
import { Title } from '@angular/platform-browser';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.scss']
})
export class QuotesTableComponent implements OnInit {

  @Input("quotes")
  quotes: Quote[];

  title: string ='Tabela Quote Objekata';

  constructor(@Host() public parent: QuotesComponent) { }   // ova komponnta ima svog parenta...

  ngOnInit() {  // funkcija koja se aktivira kada se komponenta inicijalizuje, mozemo uputiti ajax pozive, poslati neke podatke,
  }

  rowClick(quote: Quote){
    //alert(quote.quoteText);
      this.parent.selectedQuote = quote; //
  }

}
