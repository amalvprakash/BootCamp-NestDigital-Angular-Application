import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVisitorsComponent } from './view-all-visitors.component';

describe('ViewAllVisitorsComponent', () => {
  let component: ViewAllVisitorsComponent;
  let fixture: ComponentFixture<ViewAllVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
