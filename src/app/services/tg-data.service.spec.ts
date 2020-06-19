import { TestBed } from '@angular/core/testing';

import { TGDataService } from './tg-data.service';

describe('TGDataService', () => {
  let service: TGDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TGDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
