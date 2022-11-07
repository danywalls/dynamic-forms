import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup: FormGroup;
  @Input() model: {};

  fields = [];

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      formGroupFields[field] = new FormControl(fieldProps.value);
      this.fields.push({ ...fieldProps, fieldName: field });
    }
    return formGroupFields;
  }
}
