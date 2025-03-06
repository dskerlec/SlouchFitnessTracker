// WorkoutSet Interface - Details of a specific set in a workout
export interface WorkoutSet {
  id?: string;
  reps: number;
  weight: number;
  weightUnit?: 'lbs' | 'kg';
  restTime?: number; // in seconds
  notes?: string;
  perceivedExertion?: number; // RPE (Rate of Perceived Exertion) 1-10
  isWarmup?: boolean;
}