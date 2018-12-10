import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraInfoComponent } from './obra-info.component';

describe('ObraInfoComponent', () => {
  let component: ObraInfoComponent;
  let fixture: ComponentFixture<ObraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
