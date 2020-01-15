import { Injectable } from "@angular/core";
import { Quote } from "./quote";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuotesService {
  private quoteCreatedSource = new Subject<Quote>();
  quoteCreated$ = this.quoteCreatedSource.asObservable();

  publishQuote(quote: Quote) {
    this.quoteCreatedSource.next(quote);
  }

  constructor() {}
}
