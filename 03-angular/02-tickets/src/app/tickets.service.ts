import { Injectable } from '@angular/core';
import { TicketRecord } from './ticket.record';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  projects = [
    { label: 'IHM IR', value: 'IHM_IR' },
    { label: 'DB IR', value: 'DB_IR' },
    { label: 'Migration IR', value: 'MIGRATION_IR' },
    { label: 'IHM CRM', value: 'IHM_CRM' },
  ];

  types = [
    { value: 'technical', label: 'Technical' },
    { value: 'functional', label: 'Functional' },
    { value: 'usability', label: 'Usability' },
    { value: 'juridical', label: 'Juridical' },
  ];

  store: TicketRecord[] = new Array(50).fill(0).map(n => this.autoGenerate());

  constructor() { }

  create(ticket: TicketRecord): Promise<void> {
    this.store.push(ticket);
    return Promise.resolve();
  }

  autoGenerate() {
    const n = Math.round(Math.random() * 1e6);
    const date = new Date();
    date.setDate(date.getDate() + n % 100);
    return {
      title: `My nice ticket #${n}`,
      description: `This is the description of the tiket #${n}`,
      firstName: `John`,
      lastName: `Doe`,
      email: `john.doe@tickets.io`,
      project: this.projects.map(n => n.value)[n % this.projects.length],
      isUrgent: n % 2 === 0,
      type: this.types.map(n => n.value)[n % this.types.length],
      dueDate: date,
    };
  }
}
