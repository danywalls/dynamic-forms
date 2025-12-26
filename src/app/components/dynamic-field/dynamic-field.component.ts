import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicInputComponent } from "./dynamic-input/dynamic-input.component";
import { DynamicSelectComponent } from "./dynamic-select/dynamic-select.component";
import { DynamicRadioComponent } from "./dynamic-radio/dynamic-radio.component";
import { DynamicCheckboxsComponent } from "./dynamic-checkboxs/dynamic-checkboxs.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-field-input",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.css"],
  imports: [CommonModule]
})
export class DynamicFieldComponent implements AfterViewInit {

  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicInputComponent
    },
    {
      name: 'number',
      component: DynamicInputComponent
    },
    {
      name: 'select',
      component: DynamicSelectComponent
    },
    {
      name: 'radio',
      component: DynamicRadioComponent
    },
    {
      name: 'date',
      component: DynamicInputComponent
    },
    {
      name: 'checkbox',
      component: DynamicCheckboxsComponent
    }
  ]
  @ViewChild('dynamicInputContainer', { read: ViewContainerRef }) dynamicInputContainer!: ViewContainerRef;
  field = input<any>();
  formField = input<any>();

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const fieldValue = this.field();
    if (!fieldValue) return;

    const componentInstance = this.getComponentByType(fieldValue.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', fieldValue);
    dynamicComponent.setInput('formField', this.formField());
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic.component || DynamicInputComponent;
  }

}
