import { Component, OnInit, Input } from "@angular/core";
import { QuotesService } from "../quotes.service";
import { Quote } from "../quote";
import { Subscription } from "rxjs";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  subscription: Subscription;
  quotes: Quote[] = [
    new Quote(
      "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      "Albert Einstein",
      "Nyota Mwangi",
      new Date(2019, 11, 25)
    ),
    new Quote(
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      "J.K. Rowling",
      "Nduta Mwangi",
      new Date(2019, 11, 16)
    ),
    new Quote(
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
      "Albert Einstein",
      "Nyambura Mwangi",
      new Date(2020, 0, 12)
    ),
    new Quote(
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
      "Jane Austen",
      "Lenny Dennis",
      new Date(2019, 0, 18)
    )
  ].sort((a: any, b: any) => b.datePosted - a.datePosted);
  deleteQuote(index) {
    var confirmDelete = confirm(
      "You're about to delete an awesome quote. Are you sure you want to continue?"
    );
    if (confirmDelete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor(private qs: QuotesService) {
    this.subscription = qs.quoteCreated$.subscribe(quote => {
      this.quotes.unshift(quote);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
