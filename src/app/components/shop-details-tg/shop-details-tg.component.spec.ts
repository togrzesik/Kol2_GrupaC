import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsTGComponent } from './shop-details-tg.component';

describe('ShopDetailsTGComponent', () => {
  let component: ShopDetailsTGComponent;
  let fixture: ComponentFixture<ShopDetailsTGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsTGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
