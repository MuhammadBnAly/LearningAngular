import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeLogoutComponent } from './anime-logout.component';

describe('AnimeLogoutComponent', () => {
  let component: AnimeLogoutComponent;
  let fixture: ComponentFixture<AnimeLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
