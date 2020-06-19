import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemTGComponent } from './shop-item-tg.component';

describe('ShopItemTGComponent', () => {
  let component: ShopItemTGComponent;
  let fixture: ComponentFixture<ShopItemTGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemTGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
