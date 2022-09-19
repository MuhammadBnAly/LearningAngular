import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeMaterialComponent } from './some-material.component';

describe('SomeMaterialComponent', () => {
  let component: SomeMaterialComponent;
  let fixture: ComponentFixture<SomeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
