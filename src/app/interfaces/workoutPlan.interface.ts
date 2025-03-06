import { DifficultyLevel } from "../enums/difficultyLevel.enum";
import { MuscleGroup } from "../enums/muscleGroup.enum";
import { Workout } from "./workout.interface";

// WorkoutPlan Interface - A broader plan containing multiple potential workouts
export interface WorkoutPlan {
  id?: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  duration: number; // in weeks
  daysPerWeek?: number;
  workoutsPerWeek?: Workout[];
  goals?: string[];
  fitnessLevel?: DifficultyLevel;
  targetMuscleGroups?: MuscleGroup[];
  createdBy?: string; // user or trainer
}