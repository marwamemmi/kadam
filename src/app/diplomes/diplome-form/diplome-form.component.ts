import { Component, OnInit } from '@angular/core';
import { Diplome } from '../modules/diplome';
import { SharedService } from '../services/shared-dep/shared.service';

@Component({
  selector: 'app-diplome-form',
  templateUrl: './diplome-form.component.html',
  styleUrls: ['./diplome-form.component.css']
})
export class DiplomeFormComponent implements OnInit {
  liste : Diplome[]=[];
  diplome : Diplome = new Diplome();
  constructor(private myservice:SharedService) { }

  ngOnInit(): void {
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
}
