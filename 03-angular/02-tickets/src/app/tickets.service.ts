import { Injectable } from '@angular/core';

interface TicketRecord {
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  project: string;
  isUrgent: boolean;
  type: string;
  dueDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  
  store: TicketRecord[] = [];
  
  constructor() { }

  create(ticket: TicketRecord): Promise<void> {
    this.store.push(ticket);
    return Promise.resolve();
  }
}
