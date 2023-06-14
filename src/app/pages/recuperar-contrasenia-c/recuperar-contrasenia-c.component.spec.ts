import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaCComponent } from './recuperar-contrasenia-c.component';

describe('RecuperarContraseniaCComponent', () => {
  let component: RecuperarContraseniaCComponent;
  let fixture: ComponentFixture<RecuperarContraseniaCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaCComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
