import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { DynamicFieldComponent } from "./dynamic-field/dynamic-field.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { DynamicInputComponent } from './dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxsComponent } from './dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    
    DynamicFieldComponent,
    DynamicFormComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicRadioComponent,
    DynamicCheckboxsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
