import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObraComponent } from './add-obra.component';

describe('AddObraComponent', () => {
  let component: AddObraComponent;
  let fixture: ComponentFixture<AddObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
