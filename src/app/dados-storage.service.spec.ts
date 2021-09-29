import { TestBed } from '@angular/core/testing';

import { DadosStorageService } from './dados-storage.service';

describe('DadosStorageService', () => {
  let service: DadosStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
