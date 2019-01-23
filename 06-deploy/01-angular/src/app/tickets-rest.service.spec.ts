import { TestBed } from '@angular/core/testing';

import { TicketsRestService } from './tickets-rest.service';

describe('TicketsRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketsRestService = TestBed.get(TicketsRestService);
    expect(service).toBeTruthy();
  });
});
