import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcarddropdownComponent } from './creditcarddropdown.component';

describe('CreditcarddropdownComponent', () => {
  let component: CreditcarddropdownComponent;
  let fixture: ComponentFixture<CreditcarddropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcarddropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcarddropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
