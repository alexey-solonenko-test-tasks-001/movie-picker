import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePickerListComponent } from './movie-picker-list.component';

describe('MoviePickerHomeComponent', () => {
  let component: MoviePickerListComponent;
  let fixture: ComponentFixture<MoviePickerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePickerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePickerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
