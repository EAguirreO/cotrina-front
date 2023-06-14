import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoCompraAComponent } from './proceso-compra-a.component';

describe('ProcesoCompraAComponent', () => {
  let component: ProcesoCompraAComponent;
  let fixture: ComponentFixture<ProcesoCompraAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoCompraAComponent]
    });
    fixture = TestBed.createComponent(ProcesoCompraAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
