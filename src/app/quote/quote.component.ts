import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      "Albert Einstein",
      "Nyota Mwangi",
      new Date(2020, 3, 14)
    ),
    new Quote(
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      "J.K. Rowling",
      "Nduta Mwangi",
      new Date(2019, 6, 9)
    ),
    new Quote(
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
      "Albert Einstein",
      "Nyambura Mwangi",
      new Date(2022, 1, 12)
    ),
    new Quote(
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
      "Jane Austen",
      "Lenny Dennis",
      new Date(2019, 0, 18)
    )
  ];
  deleteQuote(index) {
    var confirmDelete = confirm(
      "You're about to delete an awesome quote. Are you sure you want to continue?"
    );
    if (confirmDelete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit() {}
}
