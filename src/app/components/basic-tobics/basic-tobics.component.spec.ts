import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTobicsComponent } from './basic-tobics.component';

describe('BasicTobicsComponent', () => {
  let component: BasicTobicsComponent;
  let fixture: ComponentFixture<BasicTobicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTobicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTobicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
