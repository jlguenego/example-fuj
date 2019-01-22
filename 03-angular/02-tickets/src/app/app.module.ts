import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { CreateTicketComponent } from './route/create-ticket/create-ticket.component';
import { ListTicketComponent } from './route/list-ticket/list-ticket.component';
import { HomeComponent } from './route/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewTicketComponent } from './route/view-ticket/view-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    ListTicketComponent,
    HomeComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
