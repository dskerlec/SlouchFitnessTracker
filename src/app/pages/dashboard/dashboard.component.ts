import { Component } from '@angular/core';
import { CurrentPlanComponent } from '../../components/current-plan/current-plan.component';
import { NextWorkoutComponent } from "../../components/next-workout/next-workout.component";
import { LineChartComponent } from '../../components/line-chart/line-chart.component';

import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrentPlanComponent, NextWorkoutComponent, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],  // Example data points
        label: 'Series A',  // Label for the line
        fill: false,  // Set to true if you want to fill under the line
        borderColor: 'rgb(75, 192, 192)',  // Line color
        tension: 0.1,  // Curvature of the line
      },
    ],
  };

  // Chart options
  public lineChartOptions: ChartOptions = {
    responsive: true,  // Make chart responsive to window size
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',  // Label for X-axis
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',  // Label for Y-axis
        },
        beginAtZero: true,  // Ensure the Y-axis starts at zero
      },
    },
  };
}
