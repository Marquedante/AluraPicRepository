import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})//escopo raiz - logo a mesma instancia pode ser usada em toda aplicacao
export class PhotoService {

    //injetando o HttClient
    constructor(private http: HttpClient){
    }

    listFromUser(userName: string){
      console.log(">>=================PhotoService listFromUser(...) =================>>>");
      console.log('>>>>>>>>>>>>>>>> userName', userName);
     return this.http.get<Photo[]>(API + '/' + userName + '/photos');//Observable<T>
       //o Observable eh lazy e so buscara os dados quando o subcribe for feito no componente
       //que requisita os dados
    }
   
    
}