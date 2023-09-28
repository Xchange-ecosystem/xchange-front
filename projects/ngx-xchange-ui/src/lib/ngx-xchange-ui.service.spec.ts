import { TestBed } from '@angular/core/testing';

import { NgxXchangeUiService } from './ngx-xchange-ui.service';

describe('NgxXchangeUiService', () => {
  let service: NgxXchangeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxXchangeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
