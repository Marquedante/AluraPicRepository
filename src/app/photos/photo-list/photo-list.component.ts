import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  phts: Photo[] = [];
  
  filter: string = '';
  
  debounce: Subject<string> = new Subject<string>();

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { 
    console.log(">>=================PhotoListComponent constructor(...) =================>>>");
    //EXTRA: O constructor é o primeiro método a ser carregado quando nós instanciamos uma class  
  }
  
  ngOnInit(): void {  
    console.log(">>=================PhotoListComponent ngOnInit() =================>>>");
    this.phts = this.activatedRoute.snapshot.data['phts']; //o "data" permite pegar a propriedade phts registrada
    //no arquivo app.routing.module.ts na propriedade resolve {...}
    //ou this.phts = this.activatedRoute.snapshot.data.phts;
    
    // (keyup)="debounce.next($event.target.value)"> ==> no template
    
    //O dado digitado na tela so sera passado para busca depois de 300 milisegundos de espera.
    //Agora temos um problema com o Observable do Subject eh que o mesmo fica na memoria eternamente,
    //uma vez que ninguem chama o metodo complete diferente do que ocorre com o Obsevable do http, logo
    //somos obrigados a remove-lo no metodo ngOnDestroy uma vez que ninguem chama o metodo complete.
    this.debounce.pipe(debounceTime(300)).subscribe(fltr => this.filter = fltr);
    console.log(">>>>>>>>>>>>>> PhotoListComponent ngOnInit() his.debounce.pipe(debounceTime(300)) >>>")
   
  }
  
  ngOnDestroy(): void { //metodo chamado toda vez que mudarmos de rota
    console.log(">>>>>>>>>>>>>> PhotoListComponent ngOnDestroy() >>>")
     this.debounce.unsubscribe();//desaloca memoria armazendada com Subject.

     //this.debounce.complete();//nao chamamos este metodo uma vez que nao sabemos em que momento
                                //o usuario ira parar de digitar     
  }

  //constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { 
    //  //EXTRA: O constructor é o primeiro método a ser carregado quando nós instanciamos uma class  
  //}
  
  //ngOnInit(): void {//metodo que faz parte do ciclo de vida de um componente em angular
  //                  //executado apos o componente ser criado e depois de todas as dependencias
  //                  //serem satisfeitas
  //  //const userName = this.activatedRoute.snapshot.params['userName'];
  //  const name = this.activatedRoute.snapshot.params.userName;
  //  this.photoService.listFromUser(name)//chamada do servico - pegando o parametro da url
  //                   .subscribe(pts => this.phts = pts);//no subscribe eh onde pegamos os dados realmente
  //}

  
}
