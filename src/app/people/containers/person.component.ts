import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadUnits } from '../../store/actions';
import { getUnits } from '../../store/selectors/units.selector';

@Component({
  selector: 'person',
  template: `<person-form [units]="units$ | async"></landing-form>`
})
export class PersonComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}
}
