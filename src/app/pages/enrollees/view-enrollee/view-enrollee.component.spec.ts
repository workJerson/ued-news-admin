import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnrolleeComponent } from './view-enrollee.component';

describe('ViewEnrolleeComponent', () => {
  let component: ViewEnrolleeComponent;
  let fixture: ComponentFixture<ViewEnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
