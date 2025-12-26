import { Component, input, signal, computed, effect } from "@angular/core";
import { CommonModule } from "@angular/common";
import { form, Field, required } from "@angular/forms/signals";
import { DynamicFieldComponent } from "../dynamic-field/dynamic-field.component";
import { DynamicErrorComponent } from "./dynamic-error/dynamic-error.component";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
  imports: [CommonModule, Field, DynamicFieldComponent, DynamicErrorComponent]
})
export class DynamicFormComponent {
  model = input<any>({});

  // Writable signal for form model
  formModel = signal<any>({});

  // Computed signal for fields list
  fields = computed(() => {
    const modelValue = this.model();
    const fieldsList: any[] = [];

    if (modelValue && Object.keys(modelValue).length > 0) {
      for (const field of Object.keys(modelValue)) {
        const fieldProps = modelValue[field];
        fieldsList.push({ ...fieldProps, fieldName: field });
      }
    }

    return fieldsList;
  });

  // Create Signal Form in constructor (injection context)
  dynamicForm = form(this.formModel, (f) => {
    const modelValue = this.model();
    if (modelValue && Object.keys(modelValue).length > 0) {
      for (const field of Object.keys(modelValue)) {
        const fieldProps = modelValue[field];
        if (fieldProps.rules?.required) {
          required(f[field]);
        }
      }
    }
  });

  constructor() {
    // Update formModel when model input changes
    effect(() => {
      const modelValue = this.model();
      const formModelData: any = {};

      if (modelValue && Object.keys(modelValue).length > 0) {
        for (const field of Object.keys(modelValue)) {
          const fieldProps = modelValue[field];
          formModelData[field] = fieldProps.value || '';
        }
      }

      this.formModel.set(formModelData);
    });
  }
}
