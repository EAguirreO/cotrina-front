import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaDComponent } from './recuperar-contrasenia-d.component';

describe('RecuperarContraseniaDComponent', () => {
  let component: RecuperarContraseniaDComponent;
  let fixture: ComponentFixture<RecuperarContraseniaDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaDComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
