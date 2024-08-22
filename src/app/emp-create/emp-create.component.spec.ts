import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCreateComponent } from './emp-create.component';

describe('EmpCreateComponent', () => {
  let component: EmpCreateComponent;
  let fixture: ComponentFixture<EmpCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpCreateComponent]
    });
    fixture = TestBed.createComponent(EmpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
