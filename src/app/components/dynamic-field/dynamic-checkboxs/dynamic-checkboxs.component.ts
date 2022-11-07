import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-checkboxs",
  templateUrl: "./dynamic-checkboxs.component.html",
  styleUrls: ["./dynamic-checkboxs.component.css"],
})
export class DynamicCheckboxsComponent {
  @Input() field: any;
  @Input() formName: FormGroup;
}
