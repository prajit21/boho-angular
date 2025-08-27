import { Component } from '@angular/core';

import { TaskSidemenu } from './task-sidemenu/task-sidemenu';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.scss'],
  imports: [TaskSidemenu],
})
export class Tasks {}
