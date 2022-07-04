import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthClass } from './auth-class';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpServiceAuth: HttpClient) { }
  
  register(payload: AuthClass):Observable<AuthClass>{
    return this.httpServiceAuth.post<AuthClass>('http://localhost:3000/Users',payload)
  }
}