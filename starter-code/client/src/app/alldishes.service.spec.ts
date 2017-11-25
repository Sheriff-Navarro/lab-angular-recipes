import { TestBed, inject } from '@angular/core/testing';

import { AlldishesService } from './alldishes.service';

describe('AlldishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlldishesService]
    });
  });

  it('should be created', inject([AlldishesService], (service: AlldishesService) => {
    expect(service).toBeTruthy();
  }));
});
