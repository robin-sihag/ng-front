import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFeedSender } from './live-feed-sender';

describe('LiveFeedSender', () => {
  let component: LiveFeedSender;
  let fixture: ComponentFixture<LiveFeedSender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFeedSender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFeedSender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
