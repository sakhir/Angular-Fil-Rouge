import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { Profils } from '../../Models/Profil/Profil';
import Swal from 'sweetalert2'
import { User } from 'src/app/Models/Users/User';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  profils: Profils|any;
  users: User|any;
  view = false;
  suiv = true;
  prec = false;
  page = 1;

  p: any = {};
  libelle:string|any;
  profilForm: FormGroup |any;
  submitted = false;
  constructor(private profil:ProfilService,  private router: Router ,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  
    
    this.getProfils();
       //validation
       this.profilForm = this.formBuilder.group({
        libelle: ['',Validators.required]
      })
  }

  //fonction qui recupére les profils 
  getProfils() {

  this.profil.allProfils(this.page).subscribe(
   data=>{
     this.profils=data;     
   },
   err =>console.log(err));
   
  }
//pagination
next(){
  this.page++;
  this.prec=true;
  this.getProfils();
  if (this.profils['length']==0) {
  
    this.prec = true;
    this.suiv = false;
  }
}

previous(){
  this.suiv = true;
  this.page--;
  this.getProfils();
  if (this.page == 1) {
    this.page = this.page;
    this.prec=false;
  }
} 

  get f(){
    return this.profilForm.controls;
  }
  //ajouter un profil
  addProfil(){
    this.submitted=true;
    if (this.profilForm.invalid) {
      return;
    }
    this.profil.addProfil(this.p).subscribe(data => {
      Swal.fire('Ajouté avec succes ...', 'profil ajouté', 'success') 
      this.router.navigateByUrl("/home")
    })

  }

   //les users d'un profil
   usersProfil(id:number){
    this.view = true;
    this.profil.userDuProfil(id).subscribe(data => {
      this.users = data;
    })
  }
  

}
