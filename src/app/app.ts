import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooter } from './main-footer/main-footer';
import { MainHeader } from './main-header/main-header';
import { LiveFeedSender } from './live-feed-sender/live-feed-sender';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,LiveFeedSender, MainHeader,MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-front');
}
