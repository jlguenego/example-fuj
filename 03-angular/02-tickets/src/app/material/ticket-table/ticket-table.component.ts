import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatCheckboxChange } from '@angular/material';
import { TicketTableDataSource } from './ticket-table-datasource';
import { TicketsService } from 'src/app/tickets.service';
import { TicketRecord } from 'src/app/ticket.record';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TicketTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['check', 'dueDate', 'title', 'firstName', 'lastName'];
  selectedRowIndexes = new Set<number>();

  constructor(private tickets: TicketsService) { }

  ngOnInit() {
    this.dataSource = new TicketTableDataSource(this.paginator, this.sort, this.tickets);
  }

  viewTicket(row: TicketRecord) {
    this.tickets.view(row.id);
  }

  onCheckBoxChange(event: MatCheckboxChange, row) {
    console.log('event', event);
    if (event.checked) {
      this.highlight(row);
    } else {
      this.unHighlight(row);
    }
  }

  highlight(row: TicketRecord) {
    this.selectedRowIndexes.add(row.id);
  }

  unHighlight(row: TicketRecord) {
    this.selectedRowIndexes.delete(row.id);
  }

  delete() {
    this.selectedRowIndexes.forEach(n => this.tickets.delete(n))
  }
}
