import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isOpen = false;
  state$ = new BehaviorSubject<boolean>(false);

  isHandsetPortrait$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches),
      map(isHandset => {
        if (isHandset === false) {
          this.isOpen = false;
          this.state$.next(this.isOpen);
        }
        return isHandset;
      }),
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  toggle() {
    console.log('toggle');
    this.isOpen = !this.isOpen;
    this.state$.next(this.isOpen);
  }
}
