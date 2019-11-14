import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

 @Input() photos: Photo[] = [];  //inbound properties

 rows = []; //rows: any[] = [] //nossa lista de fotos ira iterar em rows nao mais em photos

  constructor() { 
    //EXTRA: O constructor é o primeiro método a ser carregado quando nós instanciamos uma class  
  }

  ngOnInit(){
    console.log(">>>>>>>>>>> ngOnInit() >>>>>>>>>>>>>"+this.photos.length);
  }

  ngOnChanges(changes: SimpleChanges) {//metodo chamado toda vez que a propriedade inbound property, photos, mudar
    console.log(">>>>>>>>>>> 1 - ngOnChanges() >>>>>>>>>>>>>"+this.photos.length);
    //Um objeto do tipo SimpleChanges possui uma propriedade de mesmo nome da inbound property, neste caso "photos", que sofreu mudança.
    if(changes.photos){ //se houve mudanca na inbound property "photos" entao atualize-a
    console.log(">>>>>>>>>>> 2 - ngOnChanges() >>>>>>>>>>>>>"+this.photos.length);
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(pts: Photo[]): any[] {//criara um array de array onde o primeiro array tem 3 fotos 
                                      //e o segundo array tem 3 fotos ate o ulimto array que tera 
                                      //o que restar. 
       const newRows = [] ;

       for(let index=0; index < pts.length; index+=3){
           newRows.push(pts.slice(index,index + 3));//pega uma fatia do array com 3 objetos do tipo Photo
       }
        return newRows;
  }

}

//return newRows; //veja o retorno abaixo
//[
// [a,b,c],
// [e,f,g],
// [h,i,j],
// [l,m,n],
// [o,p,q],
// [r,s]
//]
