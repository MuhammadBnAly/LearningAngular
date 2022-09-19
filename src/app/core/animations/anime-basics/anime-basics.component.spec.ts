import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeBasicsComponent } from './anime-basics.component';

describe('AnimeBasicsComponent', () => {
  let component: AnimeBasicsComponent;
  let fixture: ComponentFixture<AnimeBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
