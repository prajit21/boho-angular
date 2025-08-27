import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySales } from './monthly-sales';

describe('MonthlySalesComponent', () => {
  let component: MonthlySalesComponent;
  let fixture: ComponentFixture<MonthlySalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MonthlySales],
    });
    fixture = TestBed.createComponent(MonthlySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
