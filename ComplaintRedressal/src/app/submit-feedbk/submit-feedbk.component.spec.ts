import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFeedbkComponent } from './submit-feedbk.component';

describe('SubmitFeedbkComponent', () => {
  let component: SubmitFeedbkComponent;
  let fixture: ComponentFixture<SubmitFeedbkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitFeedbkComponent]
    });
    fixture = TestBed.createComponent(SubmitFeedbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
