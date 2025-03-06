import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DifficultyLevel } from '../enums/difficultyLevel.enum';
import { ExerciseType } from '../enums/exerciseType.enum';
import { MuscleGroup } from '../enums/muscleGroup.enum';
import { Exercise } from '../interfaces/exercise.interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(private _http: HttpClient) {}

  getExercises(): Observable<Exercise[]> {
    return this._http.get<{exercises: Exercise[]}>('assets/exercises.json').pipe(
      map(response => response.exercises)
    );
  }

  getFilteredExercises(filters?: {
    type?: ExerciseType,
    muscleGroup?: MuscleGroup,
    difficulty?: DifficultyLevel
  }): Observable<Exercise[]> {
    return this.getExercises().pipe(
      map(exercises => {
        if (!filters) return exercises;

        return exercises.filter(exercise => 
          (!filters.type || exercise.type === filters.type) &&
          (!filters.muscleGroup || exercise.muscleGroup === filters.muscleGroup) &&
          (!filters.difficulty || exercise.difficulty === filters.difficulty)
        );
      })
    );
  }

  getExerciseById(id: string): Observable<Exercise | undefined> {
    return this.getExercises().pipe(
      map(exercises => exercises.find(exercise => exercise.id === id))
    );
  }

  // getUniqueTypes(): Observable<string[]> {
  //   return this.getExercises().pipe(
  //     map(exercises => [...new Set(exercises.map(e => e.type))])
  //   );
  // }

  // getMuscleGroups(): Observable<string[]> {
  //   return this.getExercises().pipe(
  //     map(exercises => [...new Set(exercises.map(e => e.muscleGroup))])
  //   );
  // }

  // getDifficulties(): Observable<string[]> {
  //   return this.getExercises().pipe(
  //     map(exercises => [...new Set(exercises.map(e => e.difficulty))])
  //   );
  // }
}