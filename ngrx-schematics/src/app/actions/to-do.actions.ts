import { Action } from '@ngrx/store';

export enum ToDoActionTypes {
  LoadTasks = '[ToDo] LOAD TASKS',
  LoadTasksCompleted = '[ToDo] LOAD TASKS COMPLETED',
  AddTask = '[ToDo] ADD TASK',
  AddTaskCompleted = '[ToDo] ADD TASK COMPLETED',
  RemoveTask = '[ToDo] REMOVE TASK',
  RemoveTaskCompleted = '[ToDo] REMOVE TASK COMPLETED'
}

export class ToDoLoadTasks implements Action {
  readonly type = ToDoActionTypes.LoadTasks;

  constructor(payload: any) {}
}

export class ToDoLoadTasksCompleted implements Action {
  readonly type = ToDoActionTypes.LoadTasksCompleted;

  constructor(payload: any) {}
}

export class ToDoAddTask implements Action {
  readonly type = ToDoActionTypes.AddTask;

  constructor(payload: any) {}
}

export class ToDoAddTaskCompleted implements Action {
  readonly type = ToDoActionTypes.AddTaskCompleted;

  constructor(payload: any) {}
}

export class ToDoRemoveTask implements Action {
  readonly type = ToDoActionTypes.RemoveTask;

  constructor(payload: any) {}
}

export class ToDoRemoveTaskCompleted implements Action {
  readonly type = ToDoActionTypes.RemoveTaskCompleted;

  constructor(payload: any) {}
}

export type ToDoActions = ToDoLoadTasks
                        | ToDoLoadTasksCompleted
                        | ToDoAddTask 
                        | ToDoAddTaskCompleted
                        | ToDoRemoveTaskCompleted; 
