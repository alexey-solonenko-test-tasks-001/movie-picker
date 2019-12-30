import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePickerGenresComponent } from './movie-picker-genres.component';

describe('MoviePickerGenresComponent', () => {
  let component: MoviePickerGenresComponent;
  let fixture: ComponentFixture<MoviePickerGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePickerGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePickerGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
