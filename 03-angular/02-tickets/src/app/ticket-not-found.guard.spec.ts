import { TestBed, async, inject } from '@angular/core/testing';

import { TicketNotFoundGuard } from './ticket-not-found.guard';

describe('TicketNotFoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketNotFoundGuard]
    });
  });

  it('should ...', inject([TicketNotFoundGuard], (guard: TicketNotFoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
