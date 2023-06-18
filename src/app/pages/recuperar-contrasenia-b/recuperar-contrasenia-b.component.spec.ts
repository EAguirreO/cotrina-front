import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaBComponent } from './recuperar-contrasenia-b.component';

describe('RecuperarContraseniaBComponent', () => {
  let component: RecuperarContraseniaBComponent;
  let fixture: ComponentFixture<RecuperarContraseniaBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaBComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
