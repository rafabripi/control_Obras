import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAvanceComponent } from './nuevo-avance.component';

describe('NuevoAvanceComponent', () => {
  let component: NuevoAvanceComponent;
  let fixture: ComponentFixture<NuevoAvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
