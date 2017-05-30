import { TestBed, inject } from '@angular/core/testing';

import { AddGoodsServiceService } from './add-goods.service';

describe('AddGoodsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddGoodsServiceService]
    });
  });

  it('should be created', inject([AddGoodsServiceService], (service: AddGoodsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
