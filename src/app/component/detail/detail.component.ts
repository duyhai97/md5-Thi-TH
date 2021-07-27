import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  product:IBook ={}
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBook(this.route.snapshot.params.id);
  }

  getBook(id: string): void {
    this.bookService.getById(id)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  exit(){
    this.router.navigate(['/list'])
  }


}
