import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleCategoryComponent } from './update-article-category.component';

describe('UpdateArticleCategoryComponent', () => {
  let component: UpdateArticleCategoryComponent;
  let fixture: ComponentFixture<UpdateArticleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArticleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
