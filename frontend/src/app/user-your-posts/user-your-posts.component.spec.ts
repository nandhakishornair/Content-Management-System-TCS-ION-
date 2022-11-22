import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserYourPostsComponent } from './user-your-posts.component';

describe('UserYourPostsComponent', () => {
  let component: UserYourPostsComponent;
  let fixture: ComponentFixture<UserYourPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserYourPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserYourPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
