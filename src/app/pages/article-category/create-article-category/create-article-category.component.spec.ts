import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleCategoryComponent } from './create-article-category.component';

describe('CreateArticleCategoryComponent', () => {
  let component: CreateArticleCategoryComponent;
  let fixture: ComponentFixture<CreateArticleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
