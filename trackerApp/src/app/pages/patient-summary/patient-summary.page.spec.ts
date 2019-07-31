import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSummaryPage } from './patient-summary.page';

describe('PatientSummaryPage', () => {
  let component: PatientSummaryPage;
  let fixture: ComponentFixture<PatientSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
