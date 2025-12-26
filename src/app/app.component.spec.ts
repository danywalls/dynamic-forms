import { describe, it, expect, beforeAll } from 'vitest';
import 'zone.js';
import 'zone.js/testing';
import '@testing-library/jest-dom';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

describe('AppComponent', () => {
    beforeAll(() => {
        getTestBed().initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
    });
    it('should create', async () => {
        await render(AppComponent, {
            schemas: [NO_ERRORS_SCHEMA]
        });
        expect(screen.getByText('Signup form')).toBeInTheDocument();
    });

    it('should have model defined', async () => {
        const { fixture } = await render(AppComponent, {
            schemas: [NO_ERRORS_SCHEMA]
        });
        const component = fixture.componentInstance;
        expect(component.model).toBeDefined();
        expect(component.model.firstname).toBeDefined();
    });
});
