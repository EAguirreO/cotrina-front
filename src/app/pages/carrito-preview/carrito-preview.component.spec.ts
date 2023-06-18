import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPreviewComponent } from './carrito-preview.component';

describe('CarritoPreviewComponent', () => {
  let component: CarritoPreviewComponent;
  let fixture: ComponentFixture<CarritoPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoPreviewComponent]
    });
    fixture = TestBed.createComponent(CarritoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
