import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  goalsArray = [
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

  getGoals() {
    return this.goalsArray;
  }

  getGoal(id) {
    // for (let goal of [Goal, id])
    for (let goal of this.goalsArray) {
      if (goal.id == id) {
        return goal;
      }
    }
  }

  //[
  //     {
  //       id: 1,
  //       name: 'brian',
  //       description: 'i jumped',
  //       completeDate: new Date(2020, 3, 30),
  //       showDescription: false,
  //     },
  //     {
  //       id: 2,
  //       name: 'Watch finding Nemo',
  //       description: 'Find an online version and watch merlin find his son',
  //       completeDate: new Date(2020, 3, 14),
  //       showDescription: false,
  //     },
  //   ];
  // }

  constructor() {}
}
