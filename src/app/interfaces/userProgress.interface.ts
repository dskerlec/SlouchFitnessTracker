import { Workout } from "./workout.interface";
import { WorkoutPlan } from "./workoutPlan.interface";

// UserProgress Interface - To track overall fitness progression
export interface UserProgress {
  userId: string;
  workoutPlans?: WorkoutPlan[];
  completedWorkouts?: Workout[];
  personalRecords?: {
    [exerciseName: string]: {
      maxWeight: number;
      maxReps: number;
      date: Date;
    }
  };
  bodyMeasurements?: {
    date: Date;
    weight: number;
    bodyFatPercentage?: number;
    measurements: {
      chest?: number;
      waist?: number;
      hips?: number;
      biceps?: number;
      thighs?: number;
    }
  }[];
}