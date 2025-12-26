import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-checkboxs",
  templateUrl: "./dynamic-checkboxs.component.html",
  styleUrls: ["./dynamic-checkboxs.component.css"],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DynamicCheckboxsComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
