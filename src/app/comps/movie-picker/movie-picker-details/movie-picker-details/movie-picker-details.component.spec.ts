import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePickerDetailsComponent } from './movie-picker-details.component';

describe('MoviePickerDetailsComponent', () => {
  let component: MoviePickerDetailsComponent;
  let fixture: ComponentFixture<MoviePickerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePickerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePickerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
