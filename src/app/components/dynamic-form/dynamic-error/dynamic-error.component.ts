import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-error",
  templateUrl: "./dynamic-error.component.html",
  styleUrls: ["./dynamic-error.component.css"],
  imports: [CommonModule]
})
export class DynamicErrorComponent {
  fieldName = input<string>('');
  formField = input<any>();
}
