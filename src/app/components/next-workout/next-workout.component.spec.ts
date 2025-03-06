import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextWorkoutComponent } from './next-workout.component';

describe('NextWorkoutComponent', () => {
  let component: NextWorkoutComponent;
  let fixture: ComponentFixture<NextWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextWorkoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
