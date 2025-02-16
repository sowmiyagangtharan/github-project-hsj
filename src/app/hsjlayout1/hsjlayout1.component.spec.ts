import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsjlayout1Component } from './hsjlayout1.component';

describe('Hsjlayout1Component', () => {
  let component: Hsjlayout1Component;
  let fixture: ComponentFixture<Hsjlayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hsjlayout1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hsjlayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
