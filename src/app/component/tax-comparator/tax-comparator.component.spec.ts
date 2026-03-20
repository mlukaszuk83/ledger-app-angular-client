import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComparatorComponent } from './tax-comparator.component';

describe('TaxComparatorComponent', () => {
  let component: TaxComparatorComponent;
  let fixture: ComponentFixture<TaxComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxComparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
