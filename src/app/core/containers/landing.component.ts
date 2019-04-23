import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Unit } from '../models/units.model';
import { LoadUnits } from '../../store/actions';
import { getUnits } from '../../store/selectors/units.selector';

@Component({
  selector: 'landing',
  template: `
    <landing-form
      [units]="units$ | async"
      [rootUnits]="rootUnits$ | async"
    ></landing-form>
  `
})
export class LandingComponent implements OnInit {
  units$: Observable<Unit[]>;
  rootUnits$: Observable<Unit[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUnits({ yearId: 'ab34' }));
    this.store.dispatch(new LoadUnits({ yearId: '34ba' }));
    this.units$ = this.store.pipe(select(getUnits));
    this.rootUnits$ = this.store.pipe(select(getUnits, { yearId: 'ab34' }));
  }
}
