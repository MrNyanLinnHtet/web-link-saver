import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  insertData(data: any) {
    return this.http.post('http://localhost:8080/insertData', data);
  }

  findAll() {
    return this.http.get('http://localhost:8080/findAllData');
  }

  findById(id: any) {
    return this.http.get('http://localhost:8080/findById?id=' + id);
  }

  delete(id: any) {
    return this.http.delete('http://localhost:8080/deleteData?id=' + id);
  }

  update(data: any) {
    console.log(data)
    return this.http.put('http://localhost:8080/updateData', data)

  }
}
