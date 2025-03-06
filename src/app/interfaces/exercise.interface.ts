import { DifficultyLevel } from "../enums/difficultyLevel.enum";
import { EquipmentType } from "../enums/equipmentType.enum";
import { ExerciseType } from "../enums/exerciseType.enum";
import { MuscleGroup } from "../enums/muscleGroup.enum";

// Exercise Interface - Detailed information about a specific exercise
export interface Exercise {
  id?: string;
  name: string;
  type: ExerciseType;
  muscleGroup: MuscleGroup;
  equipment: EquipmentType[];
  difficulty?: DifficultyLevel;
  instructions?: string[];
  videoUrl?: string;
  primaryMuscles?: string[];
  secondaryMuscles?: string[];
}