import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { PhotoService } from './../photo/photo.service';
import { Photo } from '../photo/photo';


@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    //Esta classe sera encarregada de enviar a lista de fotos pronta para o componente
    //PhotosComponent antes mesmo do componente ser criado e seu template ser renderizado
    // evitando assim a exibiçao da mensagem "Sorry, no photos". Veja tambem o arquivo app.routing.module.ts
    constructor(private photoService: PhotoService){
      console.log(">>=================PhotoListResolver constructor(...) =================>>>");
    }

    resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<Photo[]>{
      console.log(">>=================PhotoListResolver resolve(...) =================>>>");
      const userName = route.params.userName;
      return this.photoService.listFromUser(userName);  
    }

}