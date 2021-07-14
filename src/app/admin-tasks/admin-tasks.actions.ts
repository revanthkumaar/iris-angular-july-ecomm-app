import {Action} from '@ngrx/store';

//ACTION TYPES 
export enum TasksActionType{
    GET_TASKS = 'GET_TASKS',
    GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS',
    GET_TASKS_FAILED = 'GET_TASKS_FAILED'
}

//ACTION CREATOR -1 
export class GetTasks implements Action {
  readonly type = TasksActionType.GET_TASKS;
}

//action creator -2
export class GetTasksSuccess implements Action {
  readonly type = TasksActionType.GET_TASKS_SUCCESS;
  constructor(public payload: Array<tasks>){

  }
}

//action creator -
export class GetTasksFailed implements Action {
  readonly type = TasksActionType.GET_TASKS_FAILED;
  constructor(public payload: string) {}
}

export type TaskActions = GetTasks | GetTasksSuccess | GetTasksFailed;