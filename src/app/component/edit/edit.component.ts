import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {FormControl, FormGroup} from "@angular/forms";
import {BooksService} from "../../services/books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book:IBook = {};

  bookForm: FormGroup = new FormGroup({
    id:new FormControl(""),
    title :new FormControl(""),
    author :new FormControl(""),
    description :new FormControl("")
  });
  constructor(private booksService: BooksService,
              private activatedRoute: ActivatedRoute,
              private routers: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      let id: any = paramMap.get("id");
      this.booksService.getById(id).subscribe(val => {
        this.bookForm.controls['id'].setValue(val.id);
        this.bookForm.controls['title'].setValue(val.title);
        this.bookForm.controls['author'].setValue(val.author);
        this.bookForm.controls['description'].setValue(val.description);
        console.log(11111, val);});

    })
  }


  editBook(): void {
    this.booksService.update(this.bookForm.value.id, this.bookForm.value)
      .subscribe(
        response => {
          alert("Edit success")
          console.log(response);
          this.routers.navigate(['/list'])
        },
        error => {
          console.log(error);
        });
  }
  exit(){
    this.routers.navigate(['/list'])
  }

}
