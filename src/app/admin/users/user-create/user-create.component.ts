import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  selectedFile :File |any;
  constructor() { }

  ngOnInit(): void {
  }
  
  url:any=null;
  selectImage(event:any) {
   this.selectedFile=<File>event.target.files[0];
   var reader= new FileReader();
   reader.readAsDataURL(event.target.files[0]);
   reader.onload=(event)=>{
    this.url=event.target!.result;
   }
  }
}
