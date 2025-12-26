import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.css"],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DynamicInputComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
