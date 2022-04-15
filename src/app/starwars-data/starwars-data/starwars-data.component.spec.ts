import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsDataComponent } from './starwars-data.component';

describe('StarwarsDataComponent', () => {
  let component: StarwarsDataComponent;
  let fixture: ComponentFixture<StarwarsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
