import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  insertData(data: any) {

  }

  findAll() {
    return this.http.get('http://localhost:8080/findAllData');
  }

  findById() {

  }

  delete() {

  }

  update() {

  }
}
