import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLatestPostComponent } from './user-latest-post.component';

describe('UserLatestPostComponent', () => {
  let component: UserLatestPostComponent;
  let fixture: ComponentFixture<UserLatestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLatestPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLatestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
