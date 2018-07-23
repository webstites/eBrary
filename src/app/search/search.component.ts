import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GoogleBooksService } from "../shared/google-books.service";
import { Book } from '../shared/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private term: string = "";
  private books: Book[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private googleBooksService: GoogleBooksService){
      this.route.params.subscribe( param => { // Hear URL to detect changes.
        if (param['term']) {
          this.onSearch(param['term']);
        }
      } )
    }

  doSearch() {
    this.router.navigate(['search', {term: this.term}]) // Change URL.
  }

  onSearch(term: string) {
    var search = this.googleBooksService.searchBooks(term);
  }

  ngOnInit() {
  }
  
}