import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe/filter.pipe';
import { SortPipe } from 'src/app/core/pipes/sort.pipe/sort.pipe';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent, FilterPipe, SortPipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open  modal to create task', () => {
    fixture.detectChanges();

    let buttonElement =
      fixture.debugElement.nativeElement.querySelector('.add__button');
    console.log(buttonElement);

    buttonElement.click();

    expect(component.showModal).toBeTrue();
  });

  it('Check initial form value for create dashboard', () => {
    const form = component.form;
    const DashBoardFormValue = {
      name: '',
    };
    expect(form.value).toEqual(DashBoardFormValue);
  });
});
