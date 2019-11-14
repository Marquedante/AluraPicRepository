import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [ //array de rotas
        {path:'user/:userName', 
        component: PhotoListComponent,//objeto javascript
        resolve: {
                 phts: PhotoListResolver //acionado no momento em que a rota esta sendo acessada
                 }                       //ou seja resolvida - phts eh uma propriedade de PhotoListComponent
        },//objeto javascript
        {path:'p/add', component: PhotoFormComponent},//objeto javascript
        {path:'**', component: NotFoundComponent}//objeto javascript
       // {path:'**', component: PhotoListComponent},//qualquer rota diferente das duas primeiras
                                                     //anteriores exibira o componente PhotoListComponent
];

@NgModule({
       imports: [RouterModule.forRoot(routes)],//importando RouterModule e fazendo
                                               //a linkagem com nosso array de rotas
       exports: [RouterModule]//permiter acesso ao <router-outlet/>
})
export class AppRoutingModule {}