import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ContainerComponent} from './layout/container/container.component';
import {ClientComponent} from './layout/client/client.component';
import {McBreadcrumbsModule} from 'ngx6-angular-breadcrumbs';
import {AddclientComponent} from './layout/client/addclient/addclient.component';
import {CategoryComponent} from './layout/category/category.component';


const routes: Routes = [
  {path: 'accueil', component: LayoutComponent, data: { breadcrumbs : true, text: 'accueil'}, children: [
      {path: '', component: ContainerComponent , data: { breadcrumbs : true, text: 'accueil'} },
      {path: 'clients', component: ClientComponent , data: { breadcrumbs : true, text: 'Les clients'} },
      {path: 'addclient', component: AddclientComponent , data: { breadcrumbs : true, text: 'ajouter client'} },
      {path: 'categorys', component: CategoryComponent , data: { breadcrumbs : true, text: 'Les categories'} }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
