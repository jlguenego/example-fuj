import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, public tickets: TicketsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.tickets.create(this.ticketForm.value)
      .then(() => this.router.navigate(['/list']))
      .catch(error => window.alert('error while creating ticket'));
  }

  autoGenerate() {
    this.ticketForm.setValue(this.tickets.autoGenerate());
  }

}
