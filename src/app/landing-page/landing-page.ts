import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface routeData {
  routeParams: Record<string, String>;
  queryParams: Record<string, String>;
}

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  constructor(private router: Router, private routed: ActivatedRoute) {}
  ngOnInit() {
    this.routed.paramMap.subscribe((params) => {
      this.param.routeParams = { id: params.get('id') || '' };
    });
  console.log(this.param)
  }
  param: routeData = {
    routeParams: {},
    queryParams: {},
  };
}
