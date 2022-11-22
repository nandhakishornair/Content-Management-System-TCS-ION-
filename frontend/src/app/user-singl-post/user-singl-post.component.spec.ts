import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSinglPostComponent } from './user-singl-post.component';

describe('UserSinglPostComponent', () => {
  let component: UserSinglPostComponent;
  let fixture: ComponentFixture<UserSinglPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSinglPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSinglPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
