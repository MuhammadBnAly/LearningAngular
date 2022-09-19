import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAuthComponent } from './all-auth.component';

describe('AllAuthComponent', () => {
  let component: AllAuthComponent;
  let fixture: ComponentFixture<AllAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
