import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Unit } from '../models/units.model';
import { LoadUnits } from '../../store/actions';
@Component({
  selector: 'landing',
  template: `<landing-form units="units$ | async"></landing-form>`,
})
export class LandingComponent{
  units$: Observable<Unit[]>;

  constructor(private store: Store<any>){}

  ngOnInit() {
    this.store.dispatch(new LoadUnits());
  }
}