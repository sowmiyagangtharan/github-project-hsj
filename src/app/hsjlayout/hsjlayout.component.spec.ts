import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsjlayoutComponent } from './hsjlayout.component';

describe('HsjlayoutComponent', () => {
  let component: HsjlayoutComponent;
  let fixture: ComponentFixture<HsjlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsjlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsjlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
