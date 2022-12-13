import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSecurityGuardComponent } from './search-security-guard.component';

describe('SearchSecurityGuardComponent', () => {
  let component: SearchSecurityGuardComponent;
  let fixture: ComponentFixture<SearchSecurityGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSecurityGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSecurityGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
