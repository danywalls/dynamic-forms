import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-select",
  templateUrl: "./dynamic-select.component.html",
  styleUrls: ["./dynamic-select.component.css"],
})
export class DynamicSelectComponent implements OnInit {
  @Input() field: any;
  @Input() formName: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
