import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudittypeModalComponent } from './audittype-modal.component';

describe('AudittypeModalComponent', () => {
  let component: AudittypeModalComponent;
  let fixture: ComponentFixture<AudittypeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudittypeModalComponent]
    });
    fixture = TestBed.createComponent(AudittypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
