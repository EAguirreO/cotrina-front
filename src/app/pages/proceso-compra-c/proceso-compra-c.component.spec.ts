import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoCompraCComponent } from './proceso-compra-c.component';

describe('ProcesoCompraCComponent', () => {
  let component: ProcesoCompraCComponent;
  let fixture: ComponentFixture<ProcesoCompraCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoCompraCComponent]
    });
    fixture = TestBed.createComponent(ProcesoCompraCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
