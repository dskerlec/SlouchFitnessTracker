import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-current-plan',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './current-plan.component.html',
  styleUrl: './current-plan.component.scss'
})
export class CurrentPlanComponent {

}
