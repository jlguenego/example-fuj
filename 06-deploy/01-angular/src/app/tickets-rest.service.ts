import { Injectable } from '@angular/core';
import { TicketRecord } from './ticket.record';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketsRestService {

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
  store: TicketRecord[] = [];
  store$ = new BehaviorSubject(this.store);

  constructor(private router: Router, private http: HttpClient) {
    console.log('ticket rest');
    this.retrieveAll();
  }

  retrieveAll() {
    this.http.get(environment.domain + '/ws/tickets').subscribe({
      next: data => {
        this.store = data['content'];
      },
      error: e => console.error('error', e)
    });
  }

  create(ticket: TicketRecord): Promise<void> {
    this.nextId++;
    this.store.push({ id: this.nextId, ...ticket });
    return Promise.resolve();
  }

  view(id) {
    this.router.navigate(['ticket', id]);
  }

  get(id: number): TicketRecord {
    return this.store.find(n => n.id === id);
  }

  delete(id: number) {
    console.log('delete', id);
    const index = this.store.findIndex(n => n.id === id);
    console.log('index', index);
    this.store.splice(index, 1);
    this.store$.next(this.store);
  }

  autoGenerate(): TicketRecord {
    const n = Math.round(Math.random() * 1e6);
    const date = new Date();
    date.setDate(date.getDate() + n % 100);
    const firstnames = ['John', 'Andrew', 'Trevor', 'Mark', 'Simon', 'Josef', 'Kirk'];
    const lastnames = ['Doe', 'Greenwood', 'Everden', 'Hall', 'Patrick'];
    return {
      title: `My nice ticket #${n}`,
      description: `This is the description of the ticket #${n}`,
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
