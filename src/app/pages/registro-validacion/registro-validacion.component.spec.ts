import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroValidacionComponent } from './registro-validacion.component';

describe('RegistroValidacionComponent', () => {
  let component: RegistroValidacionComponent;
  let fixture: ComponentFixture<RegistroValidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroValidacionComponent]
    });
    fixture = TestBed.createComponent(RegistroValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
