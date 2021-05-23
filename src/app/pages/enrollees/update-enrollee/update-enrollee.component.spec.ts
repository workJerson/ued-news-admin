import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrolleeComponent } from './update-enrollee.component';

describe('UpdateEnrolleeComponent', () => {
  let component: UpdateEnrolleeComponent;
  let fixture: ComponentFixture<UpdateEnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
