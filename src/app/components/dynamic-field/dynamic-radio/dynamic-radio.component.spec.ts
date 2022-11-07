import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRadioComponent } from './dynamic-radio.component';

describe('DynamicRadioComponent', () => {
  let component: DynamicRadioComponent;
  let fixture: ComponentFixture<DynamicRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
