import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePopupComponent } from './anime-popup.component';

describe('AnimePopupComponent', () => {
  let component: AnimePopupComponent;
  let fixture: ComponentFixture<AnimePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
