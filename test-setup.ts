import '@testing-library/jest-dom';
import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

console.log('Initializing Test Environment');
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
