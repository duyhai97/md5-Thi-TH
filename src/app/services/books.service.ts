import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "../ibook";

const URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(URL);
  }

  getById(id: any): Observable<IBook> {
    return this.http.get(`${URL}/${id}`);
  }

  create(data: IBook): Observable<IBook> {
    return this.http.post(URL, data);
  }

  update(id: any, data: IBook): Observable<IBook> {
    return this.http.put(`${URL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${URL}/${id}`);
  }
}
