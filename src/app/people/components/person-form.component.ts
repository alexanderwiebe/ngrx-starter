import { Component, Input, OnInit } from "@angular/core";
import { Unit } from "../../core/models/units.model";

@Component({
  selector: "person-form",
  template: `
    <h1>Person Page</h1>
  `
})
export class PersonFormComponent {
  @Input() units: Unit[];
}
