import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoodsComponent } from './add-goods.component';

describe('AddGoodsComponent', () => {
  let component: AddGoodsComponent;
  let fixture: ComponentFixture<AddGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
