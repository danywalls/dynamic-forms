import { Component, input, signal, effect } from "@angular/core";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DynamicFieldComponent } from "../dynamic-field/dynamic-field.component";
import { DynamicErrorComponent } from "./dynamic-error/dynamic-error.component";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
  imports: [CommonModule, ReactiveFormsModule, DynamicFieldComponent, DynamicErrorComponent]
})
export class DynamicFormComponent {
  model = input<any>({});
  dynamicFormGroup = signal<FormGroup>(new FormGroup({}));
  fields = signal<any[]>([]);

  constructor() {
    effect(() => {
      const modelValue = this.model();
      if (modelValue && Object.keys(modelValue).length > 0) {
        this.buildForm(modelValue);
      }
    });
  }

  private buildForm(modelValue: any) {
    const formGroupFields = this.getFormControlsFields(modelValue);
    this.dynamicFormGroup.set(new FormGroup(formGroupFields));
  }

  private getFormControlsFields(modelValue: any) {
    const formGroupFields: Record<string, FormControl> = {};
    const fieldsList: any[] = [];

    for (const field of Object.keys(modelValue)) {
      const fieldProps = modelValue[field];
      const validators = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      fieldsList.push({ ...fieldProps, fieldName: field });
    }

    this.fields.set(fieldsList);
    return formGroupFields;
  }

  private addValidator(rules: any) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required":
          return Validators.required;
        //add more case for future.
      }
    });
    return validators;
  }
}
