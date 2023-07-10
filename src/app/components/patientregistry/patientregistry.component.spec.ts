import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregistryComponent } from './patientregistry.component';

describe('PatientregistryComponent', () => {
  let component: PatientregistryComponent;
  let fixture: ComponentFixture<PatientregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientregistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
