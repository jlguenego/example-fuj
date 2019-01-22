import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketsService } from './tickets.service';

@Injectable({
  providedIn: 'root'
})
export class TicketNotFoundGuard implements CanActivate {

  constructor(private tickets: TicketsService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.tickets.store.find(n => n.id === +next.params.id)) {
      return true;
    } else {
      this.router.navigate(['not-found']);
      return false;
    }
  }
}
