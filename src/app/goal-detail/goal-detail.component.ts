import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss'],
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor(private route: ActivatedRoute, private service: GoalService) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.goalId = id;
    this.goal = this.service.getGoal(id);
    console.log(this.goal);
  }
  public goalId;
}
