import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostInCategoryComponent } from './user-post-in-category.component';

describe('UserPostInCategoryComponent', () => {
  let component: UserPostInCategoryComponent;
  let fixture: ComponentFixture<UserPostInCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostInCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
