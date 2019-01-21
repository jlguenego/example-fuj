import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isOpen = false;
  state$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggle() {
    console.log('toggle');
    this.isOpen = !this.isOpen;
    this.state$.next(this.isOpen);
  }
}
