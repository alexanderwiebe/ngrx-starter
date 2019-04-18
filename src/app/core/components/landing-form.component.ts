import { Component, Input, OnInit } from "@angular/core";
import { Unit } from "../models/units.model";

@Component({
  selector: "landing-form",
  template: `
    <h1>Landing Page</h1>
    <ul>
      <li *ngFor="let unit of units">{{ unit.name }}</li>
    </ul>
    <ul>
      <li *ngFor="let unit of rootUnits">{{ unit.name }}</li>
    </ul>
  `
})
export class LandingFormComponent {
  @Input() units: Unit[];
  @Input() rootUnits: Unit[];
}
