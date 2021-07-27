import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product:any;

  constructor(private booksService: BooksService,
              private activatedRoute: ActivatedRoute,
              private routers: Router) { }

  ngOnInit(): void {
    this.getBook(this.activatedRoute.snapshot.params.id);
  }

  getBook(id: string): void {
    this.booksService.getById(id)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteBook(): void {
    this.booksService.delete(this.product.id)
      .subscribe(
        response => {
          alert("Xóa thành công")
          this.routers.navigate(['/list'])
          console.log(response);

        },
        error => {
          console.log(error);
        });

  }

  exit(){
    this.routers.navigate(['/list'])
  }




}
