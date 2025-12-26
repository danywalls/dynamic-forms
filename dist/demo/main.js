"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ 3715);


class AppComponent {
  model = {
    firstname: {
      type: "text",
      value: "",
      label: "FirstName",
      rules: {
        required: true
      }
    },
    lastname: {
      type: "text",
      value: "",
      label: "LastName"
    },
    address: {
      type: "text",
      value: "",
      label: "Address"
    },
    age: {
      type: "number",
      value: "",
      label: "age"
    },
    birthDay: {
      type: "date",
      value: "",
      label: "Birthday"
    },
    typeBussines: {
      label: "Bussines Type",
      value: "premium",
      type: "radio",
      options: [{
        label: "Enterprise",
        value: "1500"
      }, {
        label: "Home",
        value: "6"
      }, {
        label: "Personal",
        value: "1"
      }]
    },
    newsletterIn: {
      label: "Suscribe to newsletter",
      value: "email",
      type: "checkbox"
    },
    subscriptionType: {
      label: "Suscription Type",
      value: "premium",
      type: "select",
      options: [{
        label: "Pick one",
        value: ""
      }, {
        label: "Premium",
        value: "premium"
      }, {
        label: "Basic",
        value: "basic"
      }]
    },
    country: {
      id: 'country',
      label: "Country",
      type: "select",
      options: [{
        label: "Spain",
        value: "ES"
      }, {
        label: "USA",
        value: "US"
      }],
      provideData: [{
        label: 'Barcelona',
        sourceValue: 'ES',
        value: 'BCN'
      }, {
        label: 'Madrid',
        sourceValue: 'ES',
        value: 'MDN'
      }, {
        label: 'New York',
        sourceValue: 'US',
        value: 'NYC'
      }, {
        label: 'Cleveland',
        sourceValue: 'CLV',
        value: 'E'
      }]
    },
    city: {
      label: "City",
      type: "select",
      link: 'country',
      value: "",
      options: [{
        label: "Select Country First",
        value: ""
      }]
    }
  };
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["my-app"]],
    decls: 3,
    vars: 1,
    consts: [[3, "model"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signup form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-dynamic-form", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.model);
      }
    },
    dependencies: [_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFormComponent],
    styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWCIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.component */ 7507);
/* harmony import */ var _components_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dynamic-field/dynamic-field.component */ 3221);
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ 3715);
/* harmony import */ var _components_dynamic_field_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dynamic-field/dynamic-input/dynamic-input.component */ 1450);
/* harmony import */ var _components_dynamic_field_dynamic_select_dynamic_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dynamic-field/dynamic-select/dynamic-select.component */ 9056);
/* harmony import */ var _components_dynamic_field_dynamic_radio_dynamic_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dynamic-field/dynamic-radio/dynamic-radio.component */ 6074);
/* harmony import */ var _components_dynamic_field_dynamic_checkboxs_dynamic_checkboxs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component */ 8438);
/* harmony import */ var _components_dynamic_form_dynamic_error_dynamic_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-error/dynamic-error.component */ 148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _hello_component__WEBPACK_IMPORTED_MODULE_1__.HelloComponent, _components_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFieldComponent, _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__.DynamicFormComponent, _components_dynamic_field_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_4__.DynamicInputComponent, _components_dynamic_field_dynamic_select_dynamic_select_component__WEBPACK_IMPORTED_MODULE_5__.DynamicSelectComponent, _components_dynamic_field_dynamic_radio_dynamic_radio_component__WEBPACK_IMPORTED_MODULE_6__.DynamicRadioComponent, _components_dynamic_field_dynamic_checkboxs_dynamic_checkboxs_component__WEBPACK_IMPORTED_MODULE_7__.DynamicCheckboxsComponent, _components_dynamic_form_dynamic_error_dynamic_error_component__WEBPACK_IMPORTED_MODULE_8__.DynamicErrorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 8438:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicCheckboxsComponent: () => (/* binding */ DynamicCheckboxsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);


class DynamicCheckboxsComponent {
  formgroupDirective;
  field;
  formName;
  constructor(formgroupDirective) {
    this.formgroupDirective = formgroupDirective;
    this.formName = formgroupDirective.control;
  }
  static ɵfac = function DynamicCheckboxsComponent_Factory(t) {
    return new (t || DynamicCheckboxsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DynamicCheckboxsComponent,
    selectors: [["app-dynamic-checkboxs"]],
    inputs: {
      field: "field"
    },
    decls: 4,
    vars: 5,
    consts: [[3, "formGroup"], ["type", "checkbox", 3, "name", "formControlName", "value"]],
    template: function DynamicCheckboxsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.field.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.field.fieldName)("formControlName", ctx.field.fieldName)("value", ctx.field.value);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3221:
/*!*********************************************************************!*\
  !*** ./src/app/components/dynamic-field/dynamic-field.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicFieldComponent: () => (/* binding */ DynamicFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-input/dynamic-input.component */ 1450);
/* harmony import */ var _dynamic_select_dynamic_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-select/dynamic-select.component */ 9056);
/* harmony import */ var _dynamic_radio_dynamic_radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-radio/dynamic-radio.component */ 6074);
/* harmony import */ var _dynamic_checkboxs_dynamic_checkboxs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-checkboxs/dynamic-checkboxs.component */ 8438);






const _c0 = ["dynamicInputContainer"];
class DynamicFieldComponent {
  cd;
  supportedDynamicComponents = [{
    name: 'text',
    component: _dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_0__.DynamicInputComponent
  }, {
    name: 'number',
    component: _dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_0__.DynamicInputComponent
  }, {
    name: 'select',
    component: _dynamic_select_dynamic_select_component__WEBPACK_IMPORTED_MODULE_1__.DynamicSelectComponent
  }, {
    name: 'radio',
    component: _dynamic_radio_dynamic_radio_component__WEBPACK_IMPORTED_MODULE_2__.DynamicRadioComponent
  }, {
    name: 'date',
    component: _dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_0__.DynamicInputComponent
  }, {
    name: 'checkbox',
    component: _dynamic_checkboxs_dynamic_checkboxs_component__WEBPACK_IMPORTED_MODULE_3__.DynamicCheckboxsComponent
  }];
  dynamicInputContainer;
  field;
  formName;
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterViewInit() {
    this.registerDynamicField();
  }
  registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type);
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance);
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }
  getComponentByType(type) {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic.component || _dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_0__.DynamicInputComponent;
  }
  static ɵfac = function DynamicFieldComponent_Factory(t) {
    return new (t || DynamicFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DynamicFieldComponent,
    selectors: [["app-field-input"]],
    viewQuery: function DynamicFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dynamicInputContainer = _t.first);
      }
    },
    inputs: {
      field: "field"
    },
    decls: 2,
    vars: 0,
    consts: [["dynamicInputContainer", ""]],
    template: function DynamicFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, null, 0);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1450:
/*!***********************************************************************************!*\
  !*** ./src/app/components/dynamic-field/dynamic-input/dynamic-input.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicInputComponent: () => (/* binding */ DynamicInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);


class DynamicInputComponent {
  formgroupDirective;
  field;
  formName;
  constructor(formgroupDirective) {
    this.formgroupDirective = formgroupDirective;
    this.formName = formgroupDirective.control;
  }
  static ɵfac = function DynamicInputComponent_Factory(t) {
    return new (t || DynamicInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DynamicInputComponent,
    selectors: [["app-dynamic-input"]],
    inputs: {
      field: "field"
    },
    decls: 4,
    vars: 4,
    consts: [[3, "formGroup"], [3, "type", "formControlName"]],
    template: function DynamicInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.field.label, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.field.type)("formControlName", ctx.field.fieldName);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6074:
/*!***********************************************************************************!*\
  !*** ./src/app/components/dynamic-field/dynamic-radio/dynamic-radio.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicRadioComponent: () => (/* binding */ DynamicRadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function DynamicRadioComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label")(1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.field.fieldName)("formControlName", ctx_r1.field.fieldName)("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
  }
}
class DynamicRadioComponent {
  formgroupDirective;
  field;
  formName;
  constructor(formgroupDirective) {
    this.formgroupDirective = formgroupDirective;
    this.formName = formgroupDirective.control;
  }
  static ɵfac = function DynamicRadioComponent_Factory(t) {
    return new (t || DynamicRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DynamicRadioComponent,
    selectors: [["app-dynamic-radio"]],
    inputs: {
      field: "field"
    },
    decls: 4,
    vars: 3,
    consts: [[3, "formGroup"], [4, "ngFor", "ngForOf"], ["ngFor", "let option of field.options"], ["type", "radio", 3, "name", "formControlName", "value"]],
    template: function DynamicRadioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicRadioComponent_label_3_Template, 4, 4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9056:
/*!*************************************************************************************!*\
  !*** ./src/app/components/dynamic-field/dynamic-select/dynamic-select.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicSelectComponent: () => (/* binding */ DynamicSelectComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/message.service */ 4537);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);





function DynamicSelectComponent_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r3.label, " ");
  }
}
class DynamicSelectComponent {
  messageService;
  formGroupDirective;
  field;
  formName;
  alive = true;
  constructor(messageService, formGroupDirective) {
    this.messageService = messageService;
    this.formGroupDirective = formGroupDirective;
    this.formName = formGroupDirective.control;
  }
  ngAfterViewInit() {
    this.listenForLinkData();
  }
  ngOnDestroy() {
    this.alive = false;
  }
  listenForLinkData() {
    if (!this.field?.link) {
      return;
    }
    this.messageService.message$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(v => v.link === this.field.link), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.alive)).subscribe(v => {
      this.field.options = v.data;
    });
  }
  changedValue(value) {
    if (!this.field.provideData) {
      return;
    }
    this.messageService.messageSubject.next({
      link: this.field.fieldName,
      data: this.field.provideData.filter(v => v.sourceValue === value)
    });
  }
  static ɵfac = function DynamicSelectComponent_Factory(t) {
    return new (t || DynamicSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DynamicSelectComponent,
    selectors: [["app-dynamic-select"]],
    inputs: {
      field: "field"
    },
    decls: 6,
    vars: 4,
    consts: [["dynamicSelect", ""], [3, "formGroup"], [3, "change", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function DynamicSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1)(1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DynamicSelectComponent_Template_select_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const dynamicSelect_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.changedValue(dynamicSelect_r2.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DynamicSelectComponent_option_5_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.field.label, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx.field.fieldName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.field.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 148:
/*!**********************************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-error/dynamic-error.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicErrorComponent: () => (/* binding */ DynamicErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function DynamicErrorComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" * ", ctx_r0.fieldName, " ");
  }
}
function DynamicErrorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicErrorComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formName.controls[ctx_r0.fieldName].errors.required);
  }
}
class DynamicErrorComponent {
  formgroupDirective;
  formName;
  fieldName;
  constructor(formgroupDirective) {
    this.formgroupDirective = formgroupDirective;
  }
  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
  static ɵfac = function DynamicErrorComponent_Factory(t) {
    return new (t || DynamicErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DynamicErrorComponent,
    selectors: [["app-dynamic-error"]],
    inputs: {
      fieldName: "fieldName"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "alert", 4, "ngIf"], [1, "alert"], [4, "ngIf"]],
    template: function DynamicErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicErrorComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formName.controls[ctx.fieldName].invalid && (ctx.formName.controls[ctx.fieldName].dirty || ctx.formName.controls[ctx.fieldName].touched));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3715:
/*!*******************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicFormComponent: () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamic-field/dynamic-field.component */ 3221);
/* harmony import */ var _dynamic_error_dynamic_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-error/dynamic-error.component */ 148);






function DynamicFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-field-input", 2)(2, "app-dynamic-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", field_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldName", field_r1.fieldName);
  }
}
class DynamicFormComponent {
  model;
  dynamicFormGroup;
  fields = [];
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup(formGroupFields);
  }
  getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);
      formGroupFields[field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(fieldProps.value, validators);
      this.fields.push({
        ...fieldProps,
        fieldName: field
      });
    }
    return formGroupFields;
  }
  addValidator(rules) {
    if (!rules) {
      return [];
    }
    const validators = Object.keys(rules).map(rule => {
      switch (rule) {
        case "required":
          return _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required;
        //add more case for future.
      }
    });
    return validators;
  }
  static ɵfac = function DynamicFormComponent_Factory(t) {
    return new (t || DynamicFormComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DynamicFormComponent,
    selectors: [["app-dynamic-form"]],
    inputs: {
      model: "model"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "field"], [3, "fieldName"]],
    template: function DynamicFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicFormComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.dynamicFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fields);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFieldComponent, _dynamic_error_dynamic_error_component__WEBPACK_IMPORTED_MODULE_1__.DynamicErrorComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7507:
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloComponent: () => (/* binding */ HelloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HelloComponent {
  name;
  static ɵfac = function HelloComponent_Factory(t) {
    return new (t || HelloComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HelloComponent,
    selectors: [["hello"]],
    inputs: {
      name: "name"
    },
    decls: 2,
    vars: 1,
    template: function HelloComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.name, "!");
      }
    },
    styles: ["h1[_ngcontent-%COMP%] { font-family: Lato; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVsbG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssaUJBQWlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7IGZvbnQtZmFtaWx5OiBMYXRvOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4537:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class MessageService {
  messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  message$ = this.messageSubject.asObservable();
  static ɵfac = function MessageService_Factory(t) {
    return new (t || MessageService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MessageService,
    factory: MessageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 4050);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  // Otherwise, log the boot error
}).catch(err => console.error(err));

/***/ }),

/***/ 4050:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map