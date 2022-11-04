import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PathNotFoundComponent } from './path-not-found.component';

describe('PathNotFoundComponent', () => {
  let component: PathNotFoundComponent;
  let fixture: ComponentFixture<PathNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathNotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PathNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ', () => {
    expect(component).toBeDefined();
  });

  it('ngOnInit return undefined', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('should not have Path not found works! message after construction', () => {
    expect(component.title).toBe('Path not found works!');
    expect(component.title).not.toBe('');
  });

  it('should contain "Path not found works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;

    expect(bannerElement.textContent).toContain('Path not found works!');
  });
});
