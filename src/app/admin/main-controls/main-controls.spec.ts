import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControls } from './main-controls';

describe('MainControls', () => {
  let component: MainControls;
  let fixture: ComponentFixture<MainControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
