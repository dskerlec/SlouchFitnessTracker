import { WorkoutType } from "../enums/workoutType.enum";
import { CompletedExercise } from "./completedExercise.interface";

// Workout Interface - A specific workout session
export interface Workout {
  id?: string;
  name: string;
  type: WorkoutType;
  dateTime: Date;
  duration: number; // in minutes
  exercises: CompletedExercise[];
  totalVolume?: number; // calculated: sum of (weight * reps)
  notes?: string;
  location?: string;
  mood?: number; // 1-10 scale
  energyLevel?: number; // 1-10 scale
}