import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTasksService {

  baseUrl: string;

  constructor(private http:HttpClient) { 
      this.baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  }

  getTasksListOfAdmin() {
    return this.http.get(`${this.baseUrl}`)
    .pipe(catchError((error:any) => throwError(error.message)));
  }
}
