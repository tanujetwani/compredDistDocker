import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetremarkComponent } from './setremark.component';

describe('SetremarkComponent', () => {
  let component: SetremarkComponent;
  let fixture: ComponentFixture<SetremarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetremarkComponent]
    });
    fixture = TestBed.createComponent(SetremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
