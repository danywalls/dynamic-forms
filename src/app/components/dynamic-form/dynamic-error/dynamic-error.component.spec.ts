import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicErrorComponent } from './dynamic-error.component';

describe('DynamicErrorComponent', () => {
  let component: DynamicErrorComponent;
  let fixture: ComponentFixture<DynamicErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
