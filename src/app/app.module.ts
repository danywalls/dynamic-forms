import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { DynamicFieldComponent } from "./components/dynamic-field/dynamic-field.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { DynamicInputComponent } from "./components/dynamic-field/dynamic-input/dynamic-input.component";
import { DynamicSelectComponent } from "./components/dynamic-field/dynamic-select/dynamic-select.component";
import { DynamicRadioComponent } from "./components/dynamic-field/dynamic-radio/dynamic-radio.component";
import { DynamicCheckboxsComponent } from "./components/dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component";
import { DynamicErrorComponent } from './components/dynamic-form/dynamic-error/dynamic-error.component';

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
    DynamicErrorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
