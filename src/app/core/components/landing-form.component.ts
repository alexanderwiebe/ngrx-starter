import { Component, Input, OnInit } from '@angular/core';
import { Unit } from '../models/units.model';

@Component({
  selector: 'landing-form',
  template: `<h1>Landing Page</h1>`,
})
export class LandingFormComponent{
  @Input() units: Unit[];
}
