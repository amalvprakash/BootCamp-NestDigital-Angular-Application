import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveApproveComponent } from './admin-leave-approve.component';

describe('AdminLeaveApproveComponent', () => {
  let component: AdminLeaveApproveComponent;
  let fixture: ComponentFixture<AdminLeaveApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaveApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeaveApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
