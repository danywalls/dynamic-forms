import { Component, Input } from "@angular/core";

@Component({
  selector: "app-field-input",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.css"],
})
export class DynamicFieldComponent {
  @Input() field: any;
  @Input() formName: any;
}
