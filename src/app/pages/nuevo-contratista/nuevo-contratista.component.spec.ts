import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoContratistaComponent } from './nuevo-contratista.component';

describe('NuevoContratistaComponent', () => {
  let component: NuevoContratistaComponent;
  let fixture: ComponentFixture<NuevoContratistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoContratistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
