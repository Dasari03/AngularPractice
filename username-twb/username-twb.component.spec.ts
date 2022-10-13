import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameTWBComponent } from './username-twb.component';

describe('UsernameTWBComponent', () => {
  let component: UsernameTWBComponent;
  let fixture: ComponentFixture<UsernameTWBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameTWBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameTWBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
