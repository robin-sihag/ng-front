import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFeedRec } from './live-feed-rec';

describe('LiveFeedRec', () => {
  let component: LiveFeedRec;
  let fixture: ComponentFixture<LiveFeedRec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFeedRec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFeedRec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
