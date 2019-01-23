import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav;

  constructor(public menu: MenuService) { }

  ngOnInit() {
    this.menu.state$.subscribe(state => {
      if (state === true) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

}
