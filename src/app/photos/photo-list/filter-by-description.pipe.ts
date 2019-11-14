import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{ //este nao eh um servico porem um pipe
   
   // transform(value: any, ...args: any[]) {
   //     throw new Error('Method not implemented.');
   // } 

    transform(phts: Photo[], descriptionQuery: string) {
        console.log(">>=================FilterByDescription transform(...) =================>>>");
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery){
            return phts.filter(ph => ph.description.toLowerCase().includes(descriptionQuery));
        }else{
            return phts;
        }
    } 
    
}