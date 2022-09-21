import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTeddyComponent } from './rxjs-teddy.component';

describe('RxjsTeddyComponent', () => {
  let component: RxjsTeddyComponent;
  let fixture: ComponentFixture<RxjsTeddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTeddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTeddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
