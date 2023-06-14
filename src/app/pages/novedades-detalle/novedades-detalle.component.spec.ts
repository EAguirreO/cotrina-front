import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesDetalleComponent } from './novedades-detalle.component';

describe('NovedadesDetalleComponent', () => {
  let component: NovedadesDetalleComponent;
  let fixture: ComponentFixture<NovedadesDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovedadesDetalleComponent]
    });
    fixture = TestBed.createComponent(NovedadesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
