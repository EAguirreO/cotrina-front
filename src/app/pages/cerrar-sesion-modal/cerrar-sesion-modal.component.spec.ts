import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSesionModalComponent } from './cerrar-sesion-modal.component';

describe('CerrarSesionModalComponent', () => {
  let component: CerrarSesionModalComponent;
  let fixture: ComponentFixture<CerrarSesionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerrarSesionModalComponent]
    });
    fixture = TestBed.createComponent(CerrarSesionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
