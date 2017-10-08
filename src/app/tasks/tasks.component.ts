import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  private taskList: Array<any>;
  private taskText: string;

  constructor() { }

  ngOnInit() {
    this.taskList = [
      {text: 'Tarea 1', done: false},
      {text: 'Tarea 2', done: false},
      {text: 'Tarea 3', done: false},
      {text: 'Tarea 4', done: false},
      {text: 'Tarea 5', done: false},
    ]
  }

  deleteTask(index: number): void{
    this.taskList.splice(index, 1);
  }

  addTask(): void{
    this.taskList.push({text: this.taskText, done: false});
    this.taskText = "";
  }

}
