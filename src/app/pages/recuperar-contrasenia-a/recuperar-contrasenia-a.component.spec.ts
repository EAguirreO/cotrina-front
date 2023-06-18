import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaAComponent } from './recuperar-contrasenia-a.component';

describe('RecuperarContraseniaAComponent', () => {
  let component: RecuperarContraseniaAComponent;
  let fixture: ComponentFixture<RecuperarContraseniaAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaAComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
