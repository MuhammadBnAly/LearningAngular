import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasilComponent } from './rxjs-basil.component';

describe('RxjsBasilComponent', () => {
  let component: RxjsBasilComponent;
  let fixture: ComponentFixture<RxjsBasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsBasilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsBasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
