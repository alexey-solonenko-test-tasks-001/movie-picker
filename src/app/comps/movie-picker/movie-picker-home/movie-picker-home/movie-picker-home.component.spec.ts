import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePickerHomeComponent } from './movie-picker-home.component';

describe('MoviePickerHomeComponent', () => {
  let component: MoviePickerHomeComponent;
  let fixture: ComponentFixture<MoviePickerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePickerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePickerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
