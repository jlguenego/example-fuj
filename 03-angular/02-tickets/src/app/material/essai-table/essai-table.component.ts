import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EssaiTableDataSource } from './essai-table-datasource';

@Component({
  selector: 'app-essai-table',
  templateUrl: './essai-table.component.html',
  styleUrls: ['./essai-table.component.scss']
})
export class EssaiTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EssaiTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new EssaiTableDataSource(this.paginator, this.sort);
  }
}
