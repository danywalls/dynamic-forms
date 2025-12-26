import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-radio",
  templateUrl: "./dynamic-radio.component.html",
  styleUrls: ["./dynamic-radio.component.css"],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DynamicRadioComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
