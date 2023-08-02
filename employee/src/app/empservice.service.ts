import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Empdetails,
  UniqueConstraintError,
  Read
} from './empdetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmpService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3800/';

  Insert(
    Details: Empdetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'employee/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Delete(Login: String): Observable<InsertedSuccess | UniqueConstraintError> {
    console.log(`${this.url}employee/Delete${Login}`);
    return this.http.delete<InsertedSuccess | UniqueConstraintError>(
    `${this.url}Login/Delete${Login}`
    
    
    );
  }
  Read(Login: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Login/Read${Login}`);
  }
  Update(Login: String, Details: Empdetails) {
    return this.http.put(`${this.url}Students/Update${Login}`, Details, {
      headers: this.headers,
    });
  }

}

