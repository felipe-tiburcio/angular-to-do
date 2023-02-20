import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirmation = confirm("Do you really want to erase all tasks?");

    if(confirmation) {
      this.taskList = [];
    }
  }

}
