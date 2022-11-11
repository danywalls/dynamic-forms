import {Component, Input} from "@angular/core";
import {FormControl, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: "app-field-input",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.css"],
})
export class DynamicFieldComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control
  }
}
