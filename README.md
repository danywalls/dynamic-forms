# How To Create Dynamic Forms in Angular

This code is part of the my article [Creating Dynamic Forms in Angular: A Step-by-Step Guide](https://www.danywalls.com/creating-dynamic-forms-in-angular-a-step-by-step-guide). In the guide, I explain how to create a dynamic form using **Angular 21** and the new **Signal Forms API**, starting from a simple scenario to other cases suggested by the community.

## 📚 Article Series

This repository contains code for a two-part series on Dynamic Forms in Angular:

- **Part 1**: [Creating Dynamic Forms in Angular](https://www.danywalls.com/creating-dynamic-forms-in-angular-a-step-by-step-guide) - Original implementation with Reactive Forms (main branch)
- **Part 2**: Migrating to Signal Forms in Angular 21 - Modern implementation with Signal Forms API (branch: `danywalls/signals-forms`)

> **You are currently viewing the Signal Forms implementation** (Part 2). To see the original Reactive Forms version, switch to the `main` branch.

## Features

- Dynamic form generation based on JSON configuration
- Support for various input types (Text, Number, Date, Radio, Checkbox, Select)
- Validation integration with Signal Forms validators
- **Updated to Angular 21** (latest stable version)
- **Fully standalone components architecture** (no NgModules required)
- **Signal Forms API** (`@angular/forms/signals`) - Using `form()`, `Field` directive, and signal-based validators
- **Modern Signals API** - Using `input()`, `signal()`, and `computed()` for reactive state
- **Modern Control Flow** - Using `@for` and `@if` instead of `*ngFor` and `*ngIf`
- **Type-safe forms** - Full type inference from form model

> **Note**: This project uses **Signal Forms** from `@angular/forms/signals`, which is marked as **experimental** in Angular 21. The API may change in future versions, but it's production-ready and offers significant improvements over traditional Reactive Forms.

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danywalls/dynamic-forms.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dynamic-forms
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running Tests

Run the unit tests with Vitest:

```bash
npm test
```

This project uses **Vitest** and **Angular Testing Library** for fast and reliable unit testing.

## Acknowledgments

I want to say thanks to everyone who voted a star and helped to improve this article to help other developers solve a common task for every Angular developer.

Feel free to checkout the code or run in StackBlitz.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/danywalls/dynamic-forms)
