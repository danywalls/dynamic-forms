import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckboxsComponent } from './dynamic-checkboxs.component';

describe('DynamicCheckboxsComponent', () => {
  let component: DynamicCheckboxsComponent;
  let fixture: ComponentFixture<DynamicCheckboxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCheckboxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCheckboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
