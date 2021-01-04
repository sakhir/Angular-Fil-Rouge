import { Injectable } from '@angular/core';
import { Profils } from '../Models/Profil/Profil';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/Users/User';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  allProfils(page:number){
    //Une fonction qui recupére tous les profils 
  
      return this.http.get<Profils[]>(this.baseUrl+ "/admin/profils?page="+page);
    }
    
  addProfil(p:Profils)  {
    return this.http.post(this.baseUrl+ "/admin/profils",p);;
  }

  // les users d un profil  
  userDuProfil(id:number){
    return this.http.get<User[]>(this.baseUrl+ "/admin/profils"+id+"users");
  }
}
