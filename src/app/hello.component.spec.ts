import { describe, it, expect, beforeAll } from 'vitest';
import 'zone.js';
import 'zone.js/testing';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/angular';
import { HelloComponent } from './hello.component';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

describe('HelloComponent', () => {
    beforeAll(() => {
        getTestBed().initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
    });

    it('should render name', async () => {
        await render(HelloComponent, {
            componentProperties: {
                name: 'Test User'
            }
        });

        expect(screen.getByText('Hello Test User!')).toBeInTheDocument();
    });
});
