import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ErrorsModule } from './errors/errors.module';
//import { PhotoComponent } from './photos/photo/photo.component';
//import { HttpClientModule } from '@angular/common/http';


@NgModule({ //primeiro modulo a ser carregado
  declarations: [
    AppComponent
     //  PhotoComponent //como este componente faz parte de um modulo entao importe o modulo e nao apenas o componente.
  ],
  imports: [//O BrowserModule só deve ser importado no modulo principal da aplicação.
    BrowserModule, //este modulo nao pode ser importado em nenhum outro lugar a nao ser em "AppModule"
                   //BrowserModule ==> possui as diretivas: *ngIF - *ngFor entre outras
                   //As diretivas citadas estao disponiveis apenas para os componentes deste
                   //modulo no caso apenas para o componente "AppComponent".
    PhotosModule,  //modulo
    //HttpClientModule //modulo movido para photos.module.ts
    //RouterModule,//permite ter acesso ao <router-outlet>, mas vamos deixar isso com AppRoutingModule
    AppRoutingModule,//modulo que contem as rotas
    ErrorsModule //modulo para exibicao de erro quando a pagina digitada no browser nao existe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //AppModule eh o primeiro modulo a ser carregado pela nossa aplicacao
