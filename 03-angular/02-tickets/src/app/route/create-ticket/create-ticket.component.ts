import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    type: ['technical', Validators.required]
  });

  hasUnitNumber = false;

  projects = [
    { label: 'IHM IR', value: 'IHM_IR' },
    { label: 'DB IR', value: 'DB_IR' },
    { label: 'Migration IR', value: 'MIGRATION_IR' },
    { label: 'IHM CRM', value: 'IHM_CRM' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks!');
  }

  autoGenerate() {
    alert('generate');
  }

}
