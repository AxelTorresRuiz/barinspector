import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditscanModalComponent } from './auditscan-modal.component';

describe('AuditscanModalComponent', () => {
  let component: AuditscanModalComponent;
  let fixture: ComponentFixture<AuditscanModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditscanModalComponent]
    });
    fixture = TestBed.createComponent(AuditscanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
