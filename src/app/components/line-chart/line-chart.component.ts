import { Component, Injectable, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions, Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, LineController, PointElement } from 'chart.js';

// Register the necessary components of chart.js
Chart.register(
  CategoryScale,
  LinearScale,    
  Title,          
  Tooltip,        
  Legend,         
  LineController, 
  LineElement,    
  PointElement
);

@Component({
  selector: 'app-line-chart',
  imports: [BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class LineChartComponent {
  @Input() chartData!: ChartData<'line'>;
  @Input() chartOptions!: ChartOptions;
  @Input() chartType: 'line' = 'line';
}
