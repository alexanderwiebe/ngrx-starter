import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadUnits } from '../../store/actions';

@Component({
  selector: 'not-landing-form',
  template: `
    <h1>Not Landing Page</h1>
  `
})
export class NotLandingFormComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    // this.store.dispatch(new LoadUnits());
  }
}
