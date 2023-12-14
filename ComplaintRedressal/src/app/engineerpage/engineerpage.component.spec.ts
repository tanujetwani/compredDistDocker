import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerpageComponent } from './engineerpage.component';

describe('EngineerpageComponent', () => {
  let component: EngineerpageComponent;
  let fixture: ComponentFixture<EngineerpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineerpageComponent]
    });
    fixture = TestBed.createComponent(EngineerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
