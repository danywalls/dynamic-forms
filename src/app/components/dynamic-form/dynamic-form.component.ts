import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
})
export class DynamicFormComponent implements OnInit {
  @Input() model: {};
  public dynamicFormGroup: FormGroup;
  public fields = [];

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      formGroupFields[field] = new FormControl(fieldProps.value, Validators.required);
      this.fields.push({...fieldProps, fieldName: field});
    }

    return formGroupFields;
  }

  
}
