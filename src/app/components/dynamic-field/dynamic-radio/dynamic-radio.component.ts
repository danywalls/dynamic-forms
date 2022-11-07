import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-radio",
  templateUrl: "./dynamic-radio.component.html",
  styleUrls: ["./dynamic-radio.component.css"],
})
export class DynamicRadioComponent {
  @Input() field: any;
  @Input() formName: FormGroup;
}
