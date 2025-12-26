import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Field } from "@angular/forms/signals";

@Component({
  selector: "app-dynamic-radio",
  templateUrl: "./dynamic-radio.component.html",
  styleUrls: ["./dynamic-radio.component.css"],
  imports: [CommonModule, Field]
})
export class DynamicRadioComponent {
  field = input<any>();
  formField = input<any>();
}
