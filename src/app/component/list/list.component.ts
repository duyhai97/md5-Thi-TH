import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookList: IBook[] = [];



  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getListBook()
  }

  getListBook(): void {
    this.bookService.getAll()
      .subscribe(
        list => {
          this.bookList = list;
          console.log(list);
        },
        error => {
          console.log(error);
        });
  }
}
