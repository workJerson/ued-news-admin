import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolComponent } from './view-school.component';

describe('ViewSchoolComponent', () => {
  let component: ViewSchoolComponent;
  let fixture: ComponentFixture<ViewSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
