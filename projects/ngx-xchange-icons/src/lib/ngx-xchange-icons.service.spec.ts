import { TestBed } from '@angular/core/testing';

import { NgxXchangeIconsService } from './ngx-xchange-icons.service';

describe('NgxXchangeIconsService', () => {
  let service: NgxXchangeIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxXchangeIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
