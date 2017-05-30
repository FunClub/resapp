import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerInfoComponent } from './update-seller-info.component';

describe('UpdateSellerInfoComponent', () => {
  let component: UpdateSellerInfoComponent;
  let fixture: ComponentFixture<UpdateSellerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSellerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
