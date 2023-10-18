import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditModalComponent } from './audit-modal.component';

describe('AuditModalComponent', () => {
  let component: AuditModalComponent;
  let fixture: ComponentFixture<AuditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditModalComponent]
    });
    fixture = TestBed.createComponent(AuditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
