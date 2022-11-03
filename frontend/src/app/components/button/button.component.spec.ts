import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input value', () => {
    component.name = 'DONE';
    expect(component.getNameButton).toBe('DONE');
  });

  it('should display original title', () => {
    component.name = 'DONE';
    fixture.detectChanges();

    expect(button.textContent).toContain(component.getNameButton);
  });
});
