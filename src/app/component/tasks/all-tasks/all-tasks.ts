import { NgClass } from '@angular/common';
import { Component, OnInit, SimpleChanges, input } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import * as data from '../../../shared/data/data/tasks/task-list';
import { Tasklist } from '../../../shared/data/data/tasks/task-list';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.html',
  styleUrls: ['./all-tasks.scss'],
  imports: [FeatherIcons, NgClass],
})
export class AllTasks implements OnInit {
  public taskData = data.TaskData;
  public tagData = data.TagData;
  public heading_id: number;
  public getTaskData: Tasklist;
  readonly selectedheading_id = input<number>();
  readonly selectedTagId = input<number>();

  ngOnInit(): void {
    this.taskData.map(data => {
      if (data.status) {
        this.getTaskData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedheading_id']?.currentValue;
    this.taskData.map(data => {
      if (data.title_id === id) {
        this.getTaskData = data;
      }
    });

    let tagId = changes['selectedTagId']?.currentValue;
    this.tagData.map(data => {
      if (data.title_id === tagId) {
        this.getTaskData = data;
      }
    });
  }
}
