import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/Users/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getUsers(page:number){
    //Une fonction qui recupére tous les users 
  
      return this.http.get<User[]>(this.baseUrl+ "/admin/users?page="+page);
    }
}
