import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashboardsComponent } from './new-dashboards.component';

describe('NewDashboardsComponent', () => {
  let component: NewDashboardsComponent;
  let fixture: ComponentFixture<NewDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDashboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
