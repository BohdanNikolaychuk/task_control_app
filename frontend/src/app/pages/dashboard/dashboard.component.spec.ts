import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe/filter.pipe';
import { SortPipe } from 'src/app/core/pipes/sort.pipe/sort.pipe';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, FilterPipe, SortPipe],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open modal', () => {
    fixture.detectChanges();

    let buttonElement =
      fixture.debugElement.nativeElement.querySelector('.add__dashboard');

    buttonElement.click();

    expect(component.showModal).toBeTrue();
  });
});
