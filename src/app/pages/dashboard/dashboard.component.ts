import { Component } from '@angular/core';
import { CurrentPlanComponent } from '../../components/current-plan/current-plan.component';
import { NextWorkoutComponent } from "../../components/next-workout/next-workout.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrentPlanComponent, NextWorkoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
