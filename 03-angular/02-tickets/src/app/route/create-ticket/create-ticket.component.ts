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
    description: [null, Validators.required],
    dueDate: [null, Validators.required],
    urgent: [null, Validators.required],
    firstName: [null, Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
  }

}
