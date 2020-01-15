import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { QuotesService } from "../quotes.service";

import { Quote } from "../quote";

@Component({
  selector: "app-quote-form",
  templateUrl: "./quote-form.component.html",
  styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
  quote: Quote;
  quoteForm = this.fb.group({
    quoteText: "",
    quoteAuthor: "",
    quoteCreator: ""
  });

  onSubmit(quoteDetails) {
    let { quoteText, quoteAuthor, quoteCreator } = quoteDetails;
    let newQuote = new Quote(quoteText, quoteAuthor, quoteCreator);

    this.qs.publishQuote(newQuote);
    this.quoteForm.reset();
  }

  constructor(public fb: FormBuilder, public qs: QuotesService) {}

  ngOnInit() {}
  
}
