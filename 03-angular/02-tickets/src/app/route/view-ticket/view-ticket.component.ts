import { Component, OnInit } from '@angular/core';
import { TicketRecord } from 'src/app/ticket.record';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {

  ticket: TicketRecord;

  constructor(private route: ActivatedRoute, private tickets: TicketsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params.id;
      this.ticket = this.tickets.get(id);
    })
  }

}
