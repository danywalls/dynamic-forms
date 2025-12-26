import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-error",
  templateUrl: "./dynamic-error.component.html",
  styleUrls: ["./dynamic-error.component.css"],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DynamicErrorComponent implements OnInit {
  formName: FormGroup;
  @Input() fieldName: string;

  constructor(private formgroupDirective: FormGroupDirective) { }

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
