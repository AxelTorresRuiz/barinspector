import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureScaleComponent } from './configure-scale.component';

describe('ConfigureScaleComponent', () => {
  let component: ConfigureScaleComponent;
  let fixture: ComponentFixture<ConfigureScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureScaleComponent]
    });
    fixture = TestBed.createComponent(ConfigureScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
