import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePickerThumbAnnexComponent } from './movie-picker-thumb-annex.component';

describe('MoviePickerThumbAnnexComponent', () => {
  let component: MoviePickerThumbAnnexComponent;
  let fixture: ComponentFixture<MoviePickerThumbAnnexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePickerThumbAnnexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePickerThumbAnnexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
