import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.css"],
})
export class DynamicInputComponent implements OnInit {
  @Input() field: any;
  @Input() formName: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
