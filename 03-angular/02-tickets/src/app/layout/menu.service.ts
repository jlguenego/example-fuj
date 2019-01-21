import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isOpen = false;

  constructor() { }

  toggle() {
    console.log('toggle');
    this.isOpen = !this.isOpen;
  }
}
