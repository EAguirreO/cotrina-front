import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoCompraBComponent } from './proceso-compra-b.component';

describe('ProcesoCompraBComponent', () => {
  let component: ProcesoCompraBComponent;
  let fixture: ComponentFixture<ProcesoCompraBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoCompraBComponent]
    });
    fixture = TestBed.createComponent(ProcesoCompraBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
