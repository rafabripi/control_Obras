import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasSupervisorComponent } from './obras-supervisor.component';

describe('ObrasSupervisorComponent', () => {
  let component: ObrasSupervisorComponent;
  let fixture: ComponentFixture<ObrasSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
