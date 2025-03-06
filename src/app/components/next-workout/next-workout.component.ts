import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-next-workout',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './next-workout.component.html',
  styleUrl: './next-workout.component.scss'
})
export class NextWorkoutComponent {

}
