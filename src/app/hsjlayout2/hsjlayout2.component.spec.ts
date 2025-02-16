import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsjlayout2Component } from './hsjlayout2.component';

describe('Hsjlayout2Component', () => {
  let component: Hsjlayout2Component;
  let fixture: ComponentFixture<Hsjlayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hsjlayout2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hsjlayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
