import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToEngineerComponent } from './assign-to-engineer.component';

describe('AssignToEngineerComponent', () => {
  let component: AssignToEngineerComponent;
  let fixture: ComponentFixture<AssignToEngineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignToEngineerComponent]
    });
    fixture = TestBed.createComponent(AssignToEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
