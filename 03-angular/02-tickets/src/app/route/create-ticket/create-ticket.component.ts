import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { typeSourceSpan } from '@angular/compiler';
import { TicketsService } from 'src/app/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  ticketForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.compose([Validators.required, Validators.minLength(20)])],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    project: [null, Validators.required],
    isUrgent: [false, Validators.required],
    type: ['technical', Validators.required],
    dueDate: [null, Validators.required],
  });

  hasUnitNumber = false;

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
  ]

  constructor(private fb: FormBuilder, private tickets: TicketsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.tickets.create(this.ticketForm.value).then(() => this.router.navigate(['/list']));
  }

  autoGenerate() {
    const n = Math.round(Math.random() * 1e6);
    const date = new Date();
    date.setDate(date.getDate() + n % 100);
    this.ticketForm.setValue({
      title: `My nice ticket #${n}`,
      description: `This is the description of the tiket #${n}`,
      firstName: `John`,
      lastName: `Doe`,
      email: `john.doe@tickets.io`,
      project: this.projects.map(n => n.value)[n % this.projects.length],
      isUrgent: n % 2 === 0,
      type: this.types.map(n => n.value)[n % this.types.length],
      dueDate: date,
    });
  }

}
