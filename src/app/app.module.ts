import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteComponent } from "./quote/quote.component";
import { QuoteDetailComponent } from "./quote-detail/quote-detail.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";
import { HighlightDirective } from './highlight.directive';
import { QuotesService } from './quotes.service';
import { ElapsedTimePipe } from './elapsed-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    HighlightDirective,
    ElapsedTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
