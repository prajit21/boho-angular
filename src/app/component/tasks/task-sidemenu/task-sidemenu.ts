import { Component, Output, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../shared/data/data/tasks/task-list';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';
import { AllTasks } from '../all-tasks/all-tasks';
import { AddTag } from '../modal/add-tag/add-tag';
import { NewTask } from '../modal/new-task/new-task';

@Component({
  selector: 'app-task-sidemenu',
  templateUrl: './task-sidemenu.html',
  styleUrls: ['./task-sidemenu.scss'],
  imports: [AllTasks, ClickOutsideDirective],
})
export class TaskSidemenu {
  private modalService = inject(NgbModal);

  public taskSidemenu = Data.TaskData;
  public taskTagSidemenu = Data.TagData;

  @Output() selectedheading_id: number;
  @Output() selectedTagId: number;

  public open: boolean = false;

  getData(title_id: number) {
    const getHeadingData = this.taskSidemenu.filter(data => {
      return data.title_id === title_id;
    });
    this.selectedheading_id = getHeadingData[0].title_id;
  }

  getTagData(title_id: number) {
    const getTagData = this.taskTagSidemenu.filter(data => {
      return data.title_id === title_id;
    });

    this.selectedTagId = getTagData[0].title_id;
  }

  openMenu() {
    this.open = !this.open;
  }

  openAddTask() {
    this.modalService.open(NewTask, { size: 'lg' });
  }

  openAddTag() {
    this.modalService.open(AddTag, { size: 'lg' });
  }
}
