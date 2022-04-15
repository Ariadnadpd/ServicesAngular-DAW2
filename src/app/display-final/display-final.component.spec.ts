import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFinalComponent } from './display-final.component';

describe('DisplayFinalComponent', () => {
  let component: DisplayFinalComponent;
  let fixture: ComponentFixture<DisplayFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
