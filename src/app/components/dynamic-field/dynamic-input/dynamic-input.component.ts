import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Field } from "@angular/forms/signals";

@Component({
  selector: "app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.css"],
  imports: [CommonModule, Field]
})
export class DynamicInputComponent {
  field = input<any>();
  formField = input<any>();
}
