import { Exercise } from "./exercise.interface";
import { WorkoutSet } from "./workoutSet.interface";

// CompletedExercise Interface - An exercise as it was performed in a specific workout
export interface CompletedExercise {
  id?: string;
  exercise: Exercise;
  sets: WorkoutSet[];
  notes?: string;
  order?: number;
}