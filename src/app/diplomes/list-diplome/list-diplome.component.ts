import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Diplome } from '../modules/diplome';
import { SharedService } from '../services/shared-dep/shared.service';

@Component({
  selector: 'app-list-diplome',
  templateUrl: './list-diplome.component.html',
  styleUrls: ['./list-diplome.component.css'],
  
})
export class ListDiplomeComponent implements OnInit {
 
  liste : Diplome[]=[];
  diplome : Diplome = new Diplome();

 Update={
  idDiplomes:"",
    nameDiplome :"",
    opt :"",
    dateDiplome :""
 }
  constructor(private myservice:SharedService) { }
  searchText: any;
  ngOnInit(): void {
    this.myservice.getAlldiplomeFromDB().subscribe(data=>
      {this.liste=data, console.log(this.liste)}
      );
  }

   deleteDiplome(d: Diplome){
    this.myservice.deleteDiplome(d.idDiplomes).subscribe(
      (resp:any)=>{
        console.log(resp)
        alert("delete succecful")
      },
      errors=>{
        console.log(errors);
      }

    );
  
    
  }
  onPress() {
    console.log("clicked");
    document.querySelector('#comp-render').innerHTML='<object type="text/html" data="diplome-form.component.html" ></object>';
}

onsubmit(){
 
   this.myservice.addDiplome(this.diplome).subscribe((resp:any)=>{
      console.log(resp)
      alert("add succecful")
    },
    errors=>{
      console.log(errors);
    });
    

}
getdiplomeDetail(id: number){
  this.myservice.getDiplomeById(id).subscribe(
    (resp:any)=>{
      this.myservice=resp ;
      console.log(this.myservice);
      console.log("details");
      console.log(resp);

    },
    (erros)=>{
     
      console.log("erros");

    }
  );
}
}
