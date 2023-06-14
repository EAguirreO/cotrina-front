import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoCompraDComponent } from './proceso-compra-d.component';

describe('ProcesoCompraDComponent', () => {
  let component: ProcesoCompraDComponent;
  let fixture: ComponentFixture<ProcesoCompraDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoCompraDComponent]
    });
    fixture = TestBed.createComponent(ProcesoCompraDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
