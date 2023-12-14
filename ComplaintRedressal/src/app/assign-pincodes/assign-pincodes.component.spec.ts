import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPincodesComponent } from './assign-pincodes.component';

describe('AssignPincodesComponent', () => {
  let component: AssignPincodesComponent;
  let fixture: ComponentFixture<AssignPincodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignPincodesComponent]
    });
    fixture = TestBed.createComponent(AssignPincodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
