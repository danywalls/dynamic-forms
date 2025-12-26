# Migrating Dynamic Forms to Angular 21 Signal Forms: A Complete Guide (Part 2)

> **Part 2 of the Dynamic Forms Series** - This article builds upon [Creating Dynamic Forms in Angular: A Step-by-Step Guide](https://www.danywalls.com/creating-dynamic-forms-in-angular-a-step-by-step-guide), showing how to migrate the implementation to Angular 21's experimental Signal Forms API.

In the [first part of this series](https://www.danywalls.com/creating-dynamic-forms-in-angular-a-step-by-step-guide), we learned how to create dynamic forms in Angular using Reactive Forms. Today, we'll take that implementation and migrate it to Angular 21's cutting-edge **Signal Forms API** - a revolutionary approach that leverages signals for better performance, type safety, and developer experience.

## Why Signal Forms?

Angular 21 introduces Signal Forms (`@angular/forms/signals`), an experimental API that brings several advantages:

- ✅ **Fully Type-Safe** - Complete type inference from your form model
- ✅ **Signal-Based Reactivity** - Granular updates and better performance
- ✅ **Simplified API** - One `[field]` directive instead of multiple form directives
- ✅ **Automatic Dependency Tracking** - Validators react automatically to changes
- ✅ **Better Developer Experience** - Cleaner code with less boilerplate

⚠️ **Note**: Signal Forms are marked as `@experimental` in Angular 21. The API may change in future versions, but it's production-ready and offers significant improvements over traditional Reactive Forms.

## Prerequisites

Before starting, make sure you have:

- Node.js and npm installed
- The original dynamic forms project from Part 1
- Basic understanding of Angular signals

## Step 1: Clone and Setup the Project

First, let's clone the original project and update it to Angular 21:

```bash
# Clone the repository
git clone https://github.com/danywalls/dynamic-forms.git
cd dynamic-forms

# Install dependencies
npm install

# Update to Angular 21
ng update @angular/core@21 @angular/cli@21
```

## Step 2: Migrate to Standalone Components

Angular 21 embraces standalone components. Let's remove NgModules:

### Remove app.module.ts

Delete the `src/app/app.module.ts` file - we won't need it anymore!

### Update main.ts

Replace the module-based bootstrap with standalone:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

### Update All Components

Add `imports` array to each component decorator:

```typescript
// Before (with NgModule)
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})

// After (standalone)
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  imports: [CommonModule, DynamicFieldComponent, DynamicErrorComponent]
})
```

## Step 3: Introduce Modern Signals

Before migrating to Signal Forms, let's modernize our components with Angular's signal APIs:

### Replace @Input() with input()

```typescript
// Before
@Input() model: any;
@Input() field: any;

// After
model = input<any>({});
field = input<any>();
```

### Use signal() for State

```typescript
// Before
fields: any[] = [];

// After
fields = signal<any[]>([]);
```

### Use computed() for Derived State

```typescript
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
```

## Step 4: Migrate to Signal Forms API

Now for the main event - migrating from Reactive Forms to Signal Forms!

### Update DynamicFormComponent

Replace the traditional FormGroup creation with Signal Forms:

```typescript
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
  
  // Create Signal Form with validation
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
```

**Key Changes:**
- Import `form`, `Field`, `required` from `@angular/forms/signals`
- Use `signal()` for the form model (must be writable)
- Create form with `form(model, validatorsFn)`
- Use `effect()` to update the model reactively

### Update the Template

Replace `[formGroup]` with the new approach:

```html
<!-- Before (Reactive Forms) -->
<form [formGroup]="dynamicFormGroup()">
    <div *ngFor="let field of fields()">
        <app-field-input [field]="field"></app-field-input>
        <app-dynamic-error [fieldName]="field.fieldName"></app-dynamic-error>
    </div>
</form>

<!-- After (Signal Forms) -->
<div>
    <div *ngFor="let fieldConfig of fields()">
        <app-field-input 
            [field]="fieldConfig" 
            [formField]="dynamicForm[fieldConfig.fieldName]">
        </app-field-input>
        <app-dynamic-error 
            [fieldName]="fieldConfig.fieldName" 
            [formField]="dynamicForm[fieldConfig.fieldName]">
        </app-dynamic-error>
    </div>
</div>
```

**Key Changes:**
- No `<form>` tag needed
- Pass the field from the form tree: `dynamicForm[fieldConfig.fieldName]`

## Step 5: Update Field Components

Each field component needs to use the `[field]` directive:

### DynamicInputComponent

```typescript
import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Field } from "@angular/forms/signals";

@Component({
  selector: "app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.css"],
  imports: [CommonModule, Field]
})
export class DynamicInputComponent {
  field = input<any>();
  formField = input<any>();
}
```

**Template:**

```html
<div>
    <label>{{field()?.label}} : </label>
    <input [type]="field()?.type" [field]="formField()"/>
</div>
```

**Key Changes:**
- Import `Field` from `@angular/forms/signals`
- Add `formField` input to receive the field from parent
- Use `[field]` directive instead of `[formControlName]`
- Remove `FormGroup` and `FormGroupDirective` dependencies

### Apply Same Pattern to Other Components

Update `DynamicSelectComponent`, `DynamicRadioComponent`, and `DynamicCheckboxsComponent` following the same pattern:

1. Remove `FormGroup` and `ReactiveFormsModule` imports
2. Add `Field` import from `@angular/forms/signals`
3. Add `formField = input<any>()`
4. Use `[field]="formField()"` in template

## Step 6: Update Error Component

The error component needs to access field state differently:

```typescript
import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-error",
  templateUrl: "./dynamic-error.component.html",
  styleUrls: ["./dynamic-error.component.css"],
  imports: [CommonModule]
})
export class DynamicErrorComponent {
  fieldName = input<string>('');
  formField = input<any>();
}
```

**Template:**

```html
<div *ngIf="formField() && formField()().valid() === false && formField()().touched()"
     class="alert">
    <div *ngIf="formField()().errors()?.required">
        * {{fieldName()}} is required
    </div>
</div>
```

**Understanding Field State Access:**
- `formField()` - Gets the field from the form tree
- `formField()()` - Calls the field to get its state (FieldState)
- `formField()().valid()` - Gets the valid signal
- `formField()().errors()` - Gets the errors signal

## Step 7: Update DynamicFieldComponent

Make sure to pass `formField` to dynamically created components:

```typescript
private registerDynamicField() {
  this.dynamicInputContainer.clear();
  const fieldValue = this.field();
  if (!fieldValue) return;

  const componentInstance = this.getComponentByType(fieldValue.type)
  const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
  dynamicComponent.setInput('field', fieldValue);
  dynamicComponent.setInput('formField', this.formField());
  // No need for detectChanges() with signals - Angular handles it automatically!
}
```

**Important Note:** With signals, we don't need to manually call `detectChanges()`! Angular's signal-based change detection automatically tracks signal reads and updates the view when signals change. This is one of the major benefits of using signals.

Also, remove the `ChangeDetectorRef` import and constructor dependency:

```typescript
// Before
import { ChangeDetectorRef, Component, ... } from "@angular/core";

constructor(private cd: ChangeDetectorRef) { }

// After
import { Component, ... } from "@angular/core";

constructor() {
  // No dependencies needed with signals!
}
```

## Step 8: Migrate to Modern Control Flow Syntax

Angular 17+ introduced a new control flow syntax that's more readable and performant. Let's migrate from `*ngFor` and `*ngIf` to `@for` and `@if`:

### Update DynamicFormComponent Template

```html
<!-- Before (*ngFor) -->
<div>
    <div *ngFor="let fieldConfig of fields()">
        <app-field-input [field]="fieldConfig" [formField]="dynamicForm[fieldConfig.fieldName]"></app-field-input>
        <app-dynamic-error [fieldName]="fieldConfig.fieldName"
            [formField]="dynamicForm[fieldConfig.fieldName]"></app-dynamic-error>
    </div>
</div>

<!-- After (@for) -->
<div>
    @for (fieldConfig of fields(); track fieldConfig.fieldName) {
        <div>
            <app-field-input [field]="fieldConfig" [formField]="dynamicForm[fieldConfig.fieldName]"></app-field-input>
            <app-dynamic-error [fieldName]="fieldConfig.fieldName"
                [formField]="dynamicForm[fieldConfig.fieldName]"></app-dynamic-error>
        </div>
    }
</div>
```

**Key Changes:**
- Replace `*ngFor="let item of items"` with `@for (item of items; track item.id)`
- The `track` expression is required for performance optimization

### Update DynamicRadioComponent Template

```html
<!-- Before -->
<div>
    <h3>{{field()?.label}}</h3>
    <label *ngFor="let option of field()?.options">
        <input type="radio" [value]="option.value" [field]="formField()">
        {{option.label}}
    </label>
</div>

<!-- After -->
<div>
    <h3>{{field()?.label}}</h3>
    @for (option of field()?.options; track option.value) {
        <label>
            <input type="radio" [value]="option.value" [field]="formField()">
            {{option.label}}
        </label>
    }
</div>
```

### Update DynamicSelectComponent Template

```html
<!-- Before -->
<div>
  <label>{{ field()?.label }}:</label>
  <select #dynamicSelect [field]="formField()" (change)="changedValue(dynamicSelect.value)">
    <option *ngFor="let option of field()?.options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>
</div>

<!-- After -->
<div>
  <label>{{ field()?.label }}:</label>
  <select #dynamicSelect [field]="formField()" (change)="changedValue(dynamicSelect.value)">
    @for (option of field()?.options; track option.value) {
      <option [value]="option.value">
        {{ option.label }}
      </option>
    }
  </select>
</div>
```

### Update DynamicErrorComponent Template

```html
<!-- Before (*ngIf) -->
<div *ngIf="formField() && formField()().valid() === false && formField()().touched()" class="alert">
    <div *ngIf="formField()().errors()?.required">
        * {{fieldName()}} is required
    </div>
</div>

<!-- After (@if) -->
@if (formField() && formField()().valid() === false && formField()().touched()) {
    <div class="alert">
        @if (formField()().errors()?.required) {
            <div>
                * {{fieldName()}} is required
            </div>
        }
    </div>
}
```

**Benefits of Modern Control Flow:**
- ✅ **Better Performance** - Built-in optimization without OnPush
- ✅ **More Readable** - Cleaner syntax without structural directives
- ✅ **Type Safety** - Better type inference in templates
- ✅ **Smaller Bundle** - No need for CommonModule imports for control flow

## Step 9: Test the Migration

Run the application:

```bash
npm start
```

Visit `http://localhost:4200/` and verify:
- ✅ All form fields render correctly
- ✅ Validation works
- ✅ No console errors
- ✅ Form state updates reactively

## Understanding Signal Forms Architecture

### Form Tree Structure

When you create a form with `form()`, you get a **Form Tree**:

```typescript
const myForm = form(signal({ email: '', password: '' }));

// Access fields via dot notation
myForm.email     // Field object
myForm.password  // Field object

// Get field state by calling the field
myForm.email()          // FieldState
myForm.email().value()  // Current value
myForm.email().valid()  // Validation state
```

### The [field] Directive

Signal Forms use a single directive for all bindings:

```html
<!-- Before: Multiple directives -->
<input [formControl]="emailControl">
<input formControlName="email">
<div formGroupName="address">...</div>

<!-- After: One directive -->
<input [field]="myForm.email">
<input [field]="myForm.address.street">
<input [field]="myForm.items[0].name">
```

### Validation

Validators are functions called during form creation:

```typescript
dynamicForm = form(this.formModel, (f) => {
  // Apply validators to fields
  required(f.email);
  email(f.email);
  minLength(f.password, 8);
});
```

## Comparison: Before vs After

| Aspect | Reactive Forms | Signal Forms |
|--------|---------------|--------------|
| **Form Creation** | `new FormGroup({...})` | `form(signal({...}))` |
| **Field Access** | `form.get('email')` | `form.email` |
| **State Access** | `form.get('email').value` | `form.email().value()` |
| **Validation** | `new FormControl('', [Validators.required])` | `required(f.email)` |
| **Template Binding** | `[formControlName]="email"` | `[field]="form.email"` |
| **Type Safety** | Partial | Complete |
| **Reactivity** | Zone-based | Signal-based |

## Benefits We Gained

### 1. Type Safety

```typescript
// Signal Forms infer types from the model
const form = form(signal({ email: '', age: 0 }));
form.email().value() // string
form.age().value()   // number
```

### 2. Simpler Templates

```html
<!-- One directive for everything -->
<input [field]="form.email">
<input [field]="form.address.street">
<input [field]="form.items[0]">
```

### 3. Better Performance

Signal Forms update only what changed, not the entire form tree.

### 4. Cleaner Code

No more `FormBuilder`, `FormGroup`, `FormControl` juggling!

## Common Pitfalls and Solutions

### Pitfall 1: Using computed() for Form Model

❌ **Wrong:**
```typescript
formModel = computed(() => ({ email: '' }));
dynamicForm = form(this.formModel); // Error!
```

✅ **Correct:**
```typescript
formModel = signal({ email: '' });
dynamicForm = form(this.formModel);
```

**Why?** `form()` requires a `WritableSignal`, not a read-only `Signal`.

### Pitfall 2: Calling field() in [field] Binding

❌ **Wrong:**
```html
<input [field]="formField()()">
```

✅ **Correct:**
```html
<input [field]="formField()">
```

**Why?** The `[field]` directive expects the field object, not its state.

### Pitfall 3: Accessing Field State in Template

❌ **Wrong:**
```html
<div *ngIf="formField().valid()">
```

✅ **Correct:**
```html
<div *ngIf="formField()().valid()">
```

**Why?** You need to call the field twice: once to get the field, once to get its state.

## Recap

We successfully migrated our dynamic forms from Reactive Forms to Signal Forms:

1. ✅ Updated to Angular 21
2. ✅ Migrated to standalone components
3. ✅ Replaced `@Input()` with `input()` signals
4. ✅ Converted to Signal Forms API
5. ✅ Updated all field components
6. ✅ Implemented proper error handling
7. ✅ Migrated to modern control flow syntax (`@for`, `@if`)

The result is a more modern, type-safe, and performant dynamic form system!

## Resources

- [Source Code - Original (Part 1)](https://github.com/danywalls/dynamic-forms)
- [Source Code - Signal Forms Migration (Part 2)](https://github.com/danywalls/dynamic-forms/tree/danywalls/signals-forms)
- [Part 1: Creating Dynamic Forms](https://www.danywalls.com/creating-dynamic-forms-in-angular-a-step-by-step-guide)
- [Angular Signal Forms Documentation](https://angular.love/signal-forms-in-angular-21-complete-guide)
- [Angular 21 Release Notes](https://blog.angular.dev/angular-v21-is-now-available-d0b7a3a52c3c)

> **Note**: The complete Signal Forms implementation from this article is available in the `danywalls/signals-forms` branch of the repository.

## What's Next?

In the next part of this series, we'll explore:
- Advanced validation patterns with Signal Forms
- Custom form controls using the new `FormValueControl` contract
- Form arrays and nested forms with signals
- Testing strategies for Signal Forms

Do you have suggestions or questions about Signal Forms? I'd love to hear them in the comments below!

---

**About the Author**: I'm passionate about Angular and modern web development. Follow me for more Angular tips and tutorials!
