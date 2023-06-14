import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCreadaComponent } from './cuenta-creada.component';

describe('CuentaCreadaComponent', () => {
  let component: CuentaCreadaComponent;
  let fixture: ComponentFixture<CuentaCreadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaCreadaComponent]
    });
    fixture = TestBed.createComponent(CuentaCreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
