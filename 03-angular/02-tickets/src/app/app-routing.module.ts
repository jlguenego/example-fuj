import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { CreateTicketComponent } from './route/create-ticket/create-ticket.component';
import { ListTicketComponent } from './route/list-ticket/list-ticket.component';
import { ViewTicketComponent } from './route/view-ticket/view-ticket.component';
import { NotFoundComponent } from './route/not-found/not-found.component';
import { TicketNotFoundGuard } from './ticket-not-found.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateTicketComponent },
  { path: 'list', component: ListTicketComponent },
  { path: 'ticket/:id', component: ViewTicketComponent, canActivate: [TicketNotFoundGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
