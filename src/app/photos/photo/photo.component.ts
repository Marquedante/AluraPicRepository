import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  
  @Input() descricao: string = ""; //aqui temos uma "inbound property"
                                   //devido a anotacao @Input()

  @Input() url: string = "";
  //Permite que o componente receba valores externos quando usado na forma declarativa
  //no template de outros componentes.

  constructor() {
    //EXTRA: O constructor é o primeiro método a ser carregado quando nós instanciamos uma class  
   }

  ngOnInit() {
  }

}
