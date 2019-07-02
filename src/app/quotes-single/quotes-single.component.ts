import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../models/Quote';
import { QuoteService } from '../services/quote.service';

import { environment } from '../../environments/environment';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-quotes-single',
  templateUrl: './quotes-single.component.html',
  styleUrls: ['./quotes-single.component.scss']
})
export class QuotesSingleComponent implements OnInit {

  @Input("quote") // ovo je dekorater i govori odakle da uzme Quote i kupi to iz [quote] = "  "
  quote: Quote = new Quote;

  @Input ('isViewMode')
  isViewMode: boolean = false;

  uploader : FileUploader = new FileUploader ({
    url: `${environment.apiUrl}/upload`,
    itemAlias: 'img'  // this.multer.single('img') sa ovim se poklapa ovo img koje je navedeno u itemAlias
  })

  apiUrl: string = environment.apiUrl;  // pomocna promjenljiva samo da uhvati api url iz environmenta

  constructor(public quoteService: QuoteService) {

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false} // nakon sto se doda neki fajl unutar input polja, credential = da li saljemo neke sifre i onda je na false jer ne treba
    this.uploader.onCompleteItem = (item:any, response: any, status: any, headers:any)=>{ // kad upload prodje pogledamo sta imamo 
      response = JSON.parse(response);
      if(response.status == 0) {  // ako je status = 0 onda je sve ok
        this.quote.imagePath = response.filename;
        this.quoteService.createQuote(this.quote).subscribe(data => { 
          console.log(data);        
          alert("Quote unesen!");
          this.quote = new Quote;
        })
      

      }
    }
   }

  ngOnInit() {
  }

  insertQuote(){
    if(confirm("Da li ste sigurni")){ 
      this.uploader.uploadAll(); // pokrece upload, kad se zavrsi upload onda se ucitava funkcija onCompleteItem
    }

  }

}
