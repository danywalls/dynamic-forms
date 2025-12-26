import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Field } from "@angular/forms/signals";

@Component({
  selector: "app-dynamic-checkboxs",
  templateUrl: "./dynamic-checkboxs.component.html",
  styleUrls: ["./dynamic-checkboxs.component.css"],
  imports: [CommonModule, Field]
})
export class DynamicCheckboxsComponent {
  field = input<any>();
  formField = input<any>();
}
