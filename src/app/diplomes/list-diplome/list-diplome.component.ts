import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ENOTTY } from 'constants';
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
  p: number = 1;
  msg: any;
  mapObject :any ; 

 Update={
  idDiplomes:"",
    nameDiplome :"",
    opt :"",
    dateDiplome :""
 }
 diplomeByOption={
  opt :""
 }
 date1:Date;
 date2:Date;

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
/*getdiplomeDetail($event:any, id: number){
  this.myservice.getDiplomeById(id).subscribe(
    (resp:any)=>{
      this.myservice=resp ;
      console.log(this.myservice);
      console.log("details");
      console.log(resp);
      console.log($event.target.id)

    },
    (erros)=>{
     
      console.log("erros");

    }
  );
}*/
edit(Diplome){
  this.Update=Diplome;
  console.log(Diplome);
  console.log( this.Update);
}
updateDiplome (){
  this.myservice.updateDiplome(this.Update).subscribe(
    (resp )=>{
      console.log(resp);
    },
    (errors)=>{
      console.log(errors);
    }
  );
}
getdiplomebyoption (opt){
  this.myservice.getdiplomebyoption (opt ).subscribe(
    data=>
    {this.liste=data, console.log(this.liste)}
    );

}
getdiplomePrisEntreDeuxDatesParOptions (d1,d2){
  this.myservice.getdiplomePrisEntreDeuxDatesParOptions (d1,d2 ).subscribe((data)=>{this.mapObject=data},
    (resp )=>{
      console.log(resp);
    }
  );
  console.log(d1, d2);
 // for(let [key,value]of this.mapObject){
 //   this.msg=key +" "+value
 // }

}
}
