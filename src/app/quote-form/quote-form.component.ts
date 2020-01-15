import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { QuotesService } from "../quotes.service";

import { Quote } from "../quote";

@Component({
  selector: "app-quote-form",
  templateUrl: "./quote-form.component.html",
  styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
  quote: Quote;
  quoteForm: FormGroup = this.fb.group({
    quoteText: ["", Validators.required],
    quoteAuthor: ["", Validators.required],
    quoteCreator: ["", Validators.required]
  });

  get quoteText() {
    return this.quoteForm.get("quoteText");
  }
  get quoteAuthor() {
    return this.quoteForm.get("quoteAuthor");
  }
  get quoteCreator() {
    return this.quoteForm.get("quoteCreator");
  }

  onSubmit(quoteDetails) {
    let { quoteText, quoteAuthor, quoteCreator } = quoteDetails;
    let newQuote = new Quote(quoteText, quoteAuthor, quoteCreator);

    this.qs.publishQuote(newQuote);
    this.quoteForm.reset();
  }

  constructor(private fb: FormBuilder, public qs: QuotesService) {}

  ngOnInit() {}
}
