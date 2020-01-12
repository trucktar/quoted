import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

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
    this.quote = new Quote(quoteText, quoteAuthor, quoteCreator);
    
    this.quoteForm.reset();
  }

  constructor(public fb: FormBuilder) {}

  ngOnInit() {}
}
