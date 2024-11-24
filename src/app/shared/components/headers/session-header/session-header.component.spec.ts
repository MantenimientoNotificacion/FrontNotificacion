import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionHeaderComponent } from './session-header.component';

describe('SessionHeaderComponent', () => {
  let component: SessionHeaderComponent;
  let fixture: ComponentFixture<SessionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionHeaderComponent]
    });
    fixture = TestBed.createComponent(SessionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
