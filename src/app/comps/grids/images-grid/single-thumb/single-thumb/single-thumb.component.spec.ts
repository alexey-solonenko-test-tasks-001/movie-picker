import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleThumbComponent } from './single-thumb.component';

describe('SingleThumbComponent', () => {
  let component: SingleThumbComponent;
  let fixture: ComponentFixture<SingleThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
