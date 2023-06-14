import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterMainComponent } from './alter-main.component';

describe('AlterMainComponent', () => {
  let component: AlterMainComponent;
  let fixture: ComponentFixture<AlterMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterMainComponent]
    });
    fixture = TestBed.createComponent(AlterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
