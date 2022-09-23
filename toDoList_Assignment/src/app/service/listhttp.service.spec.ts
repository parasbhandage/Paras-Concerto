import { TestBed } from '@angular/core/testing';

import { ListhttpService } from './listhttp.service';

describe('ListhttpService', () => {
  let service: ListhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
