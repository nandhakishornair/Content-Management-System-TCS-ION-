import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditPostComponent } from './user-edit-post.component';

describe('UserEditPostComponent', () => {
  let component: UserEditPostComponent;
  let fixture: ComponentFixture<UserEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
