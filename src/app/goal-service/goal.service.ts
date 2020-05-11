import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  getGoals() {
    return [
      {
        id: 1,
        name: 'brian',
        description: 'i jumped',
        completeDate: new Date(2020, 3, 30),
        showDescription: false,
      },
      {
        id: 2,
        name: 'Watch finding Nemo',
        description: 'Find an online version and watch merlin find his son',
        completeDate: new Date(2020, 3, 14),
        showDescription: false,
      },
    ];
  }

  constructor() {}
}
