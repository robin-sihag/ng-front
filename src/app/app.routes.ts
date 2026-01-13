import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { LiveFeedSender } from './live-feed-sender/live-feed-sender';
import { LiveFeedRec } from './live-feed-rec/live-feed-rec';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingPage,
  },
  {
    path: 'home/:id',
    component: LandingPage,
  },
  {
    path: 'golive',
    component: LiveFeedSender,
  },
  {
    path: 'livefeed',
    component: LiveFeedRec,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then((a) => a.ADMIN_ROUTES),
  },
   {
    path: '**',
    component: NotFound,
  },
];
