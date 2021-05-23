import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnrolleeComponent } from './create-enrollee.component';

describe('CreateEnrolleeComponent', () => {
  let component: CreateEnrolleeComponent;
  let fixture: ComponentFixture<CreateEnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
