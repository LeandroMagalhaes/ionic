import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RestApiProvider {

  urlAPI = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getProduto() {
    return new Promise(resolve => {
      this.http.get(this.urlAPI + '/produto').subscribe(data => {
        resolve(data);},
        err => {
          console.log(err);        
      });
    });
  }
}
