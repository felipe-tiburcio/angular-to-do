import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {};

  ngDoCheck() {
    this.setLocalStorage();
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirmation = confirm("Do you really want to remove all tasks?");

    if(confirmation) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    
    if(!event.length) {
      const confirmation = confirm("Task is empty. Do you want to remove it?");

      if(confirmation) {
        this.deleteItemTaskList(index);
      }

    }
  }

  public setLocalStorage() {
    if(this.taskList) {
      this.taskList.sort((first, last)=> Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
