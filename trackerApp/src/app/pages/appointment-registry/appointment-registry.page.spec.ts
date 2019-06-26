import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRegistryPage } from './appointment-registry.page';

describe('AppointmentRegistryPage', () => {
  let component: AppointmentRegistryPage;
  let fixture: ComponentFixture<AppointmentRegistryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentRegistryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentRegistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
