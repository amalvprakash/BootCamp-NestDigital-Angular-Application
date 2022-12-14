import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewLeavesComponent } from './employee-view-leaves.component';

describe('EmployeeViewLeavesComponent', () => {
  let component: EmployeeViewLeavesComponent;
  let fixture: ComponentFixture<EmployeeViewLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
