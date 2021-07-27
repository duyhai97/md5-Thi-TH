import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IBook} from "../../ibook";
import {BooksService} from "../../services/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem,MessageService} from 'primeng/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: BooksService,
              private route: ActivatedRoute,
              private router: Router,
              // private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
  }
  submitted = false;

  createBook(): void {
    if (this.bookForm.value as IBook){
      this.bookService.create(this.bookForm.value)
        .subscribe(
          response => {
            alert("Create success")
            this.router.navigate(['/list'])
            // console.log(response);
            console.log(this.bookForm.value);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  }
  exit(){
    this.router.navigate(['/list'])
  }

}
