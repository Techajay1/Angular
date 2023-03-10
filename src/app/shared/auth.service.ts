import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  RegisterUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/register', data);
  }
  loginUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/signin/', data);
  }



}
