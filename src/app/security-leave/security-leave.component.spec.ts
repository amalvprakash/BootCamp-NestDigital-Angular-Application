import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLeaveComponent } from './security-leave.component';

describe('SecurityLeaveComponent', () => {
  let component: SecurityLeaveComponent;
  let fixture: ComponentFixture<SecurityLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
