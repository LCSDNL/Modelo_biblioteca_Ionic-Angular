import { TestBed } from '@angular/core/testing';

import { EstruturasService } from './estruturas.service';

describe('EstruturasService', () => {
  let service: EstruturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstruturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
