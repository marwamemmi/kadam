import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diplome } from '../../modules/diplome';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
urldip : string ="http://localhost:8083/Diplome";


Update={
  idEtudiant:"",
   prenomE :"",
   nomE :"",

};
  constructor(private _http:HttpClient) { }


  getAlldiplomeFromDB():Observable<Diplome[]>{
    return this._http.get<Diplome[]>(this.urldip);
  }

  deleteDiplome(id:number){
    return this._http.delete(this.urldip+'/supprimerdip/'+id);
  }

public addDiplome(d: Diplome){
  return this._http.post(this.urldip+ '/ajouterdip', d);
}
public updateDiplome(d: Diplome){
  return this._http.put(this.urldip+ '/modifierdip/'+d.idDiplomes, d);
}
public getDiplomeById(id: number):Observable<Diplome>{
  return this._http.get<Diplome>(this.urldip+ '/afficherdip/'+id);
}
}
