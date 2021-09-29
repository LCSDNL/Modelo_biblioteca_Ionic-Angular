import { TestBed } from '@angular/core/testing';

import { EstrutrasService } from './estrutras.service';

describe('EstrutrasService', () => {
  let service: EstrutrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstrutrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
