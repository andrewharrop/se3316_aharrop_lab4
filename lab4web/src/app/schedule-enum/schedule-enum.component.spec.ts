import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEnumComponent } from './schedule-enum.component';

describe('ScheduleEnumComponent', () => {
  let component: ScheduleEnumComponent;
  let fixture: ComponentFixture<ScheduleEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleEnumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
