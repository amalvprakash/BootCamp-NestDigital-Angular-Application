import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddemployeeEntryComponent } from './admin-addemployee-entry.component';

describe('AdminAddemployeeEntryComponent', () => {
  let component: AdminAddemployeeEntryComponent;
  let fixture: ComponentFixture<AdminAddemployeeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddemployeeEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddemployeeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
