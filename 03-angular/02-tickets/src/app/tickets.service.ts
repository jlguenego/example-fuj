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

  nextId: number = 0;
  store: TicketRecord[] = new Array(50).fill(0).map(n => {
    const ticket = this.autoGenerate();
    this.nextId++;
    ticket.id = this.nextId;
    return ticket;
  });

  constructor() { }

  create(ticket: TicketRecord): Promise<void> {
    this.nextId++;
    this.store.push({ id: this.nextId, ...ticket });
    return Promise.resolve();
  }

  autoGenerate(): TicketRecord {
    const n = Math.round(Math.random() * 1e6);
    const date = new Date();
    date.setDate(date.getDate() + n % 100);
    const firstnames = ['John', 'Andrew', 'Trevor', 'Mark', 'Simon', 'Josef', 'Kirk'];
    const lastnames = ['Doe', 'Greenwood', 'Everden', 'Hall', 'Patrick'];
    return {
      title: `My nice ticket #${n}`,
      description: `This is the description of the tiket #${n}`,
      firstName: firstnames[n % firstnames.length],
      lastName: lastnames[n % lastnames.length],
      email: `john.doe@tickets.io`,
      project: this.projects.map(n => n.value)[n % this.projects.length],
      isUrgent: n % 2 === 0,
      type: this.types.map(n => n.value)[n % this.types.length],
      dueDate: date,
    };
  }
}
