import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    {
      id: 1,
      name: 'Watch finding Nemo',
      color: 'black',
      description: 'Find an online version and watch merlin find his son',
    },
    {
      id: 2,
      name: 'Buy Cookies',
      color: 'black',
      description: 'I have to buy cookies for the parrot',
    },
    {
      id: 3,
      name: 'Get new Phone Case',
      color: 'yellow',
      description: 'Diana has her birthday coming up soon',
    },
    {
      id: 4,
      name: 'Get Dog Food',
      color: 'red',
      description: 'Pupper likes expensive sancks',
    },
    {
      id: 5,
      name: 'Solve math homework',
      color: 'blue',
      description: 'Damn Math',
    },
    //{ id: 6, name: 'Plot my world domination plan', color: 'black', description:'Cause I am an evil overlord' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
