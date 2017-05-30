import { TestBed, inject } from '@angular/core/testing';

import { UpdateSellerService } from './update-seller.service';

describe('UpdateSellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateSellerService]
    });
  });

  it('should be created', inject([UpdateSellerService], (service: UpdateSellerService) => {
    expect(service).toBeTruthy();
  }));
});
