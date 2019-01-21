import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { CreateTicketComponent } from './route/create-ticket/create-ticket.component';
import { ListTicketComponent } from './route/list-ticket/list-ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateTicketComponent },
  { path: 'list', component: ListTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
