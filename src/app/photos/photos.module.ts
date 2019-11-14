import { FilterByDescription } from './photo-list/filter-by-description.pipe';

import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({ //os componentes declarados no mesmo modulo podem se enxergar
    declarations : [PhotoComponent,
                    PhotoListComponent, 
                    PhotoFormComponent, 
                    PhotosComponent, //componente(s) que faz(em) parte deste modulo
                    FilterByDescription], // ==> exemplo de pipe
    //exports : [PhotoComponent], //componente que pode ser exportado ou seja usado em outro modulo
                               //a partir deste modulo
    imports : [HttpClientModule, 
               CommonModule] //CommonModule ==> possui *ngIf - *ngFor entre outros
   // Componentes declarados no array declarations de um módulo são visíveis apenas entres-si, ou seja,
   // dentro apenas do proprio modulo
   // também declarados no array.
 
   // Um componente obrigatoriamente precisa pertencer a um módulo.                             
})
export class PhotosModule {

}