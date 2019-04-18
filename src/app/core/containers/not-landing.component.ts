import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Unit } from '../models/units.model';
import { LoadUnits } from '../../store/actions';

@Component({
  selector: 'not-landing',
  template: `<not-landing-form></not-landing-form>`,
})
export class NotLandingComponent{
  units$: Observable<Unit[]>;

  constructor(private store: Store<any>){}

  ngOnInit() {
    // this.store.dispatch(new LoadUnits());
  }
}