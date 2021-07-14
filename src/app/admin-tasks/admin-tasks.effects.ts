import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AdminTasksService} from './admin-tasks.service'
import { switchMap, catchError, map} from 'rxjs/operators'
//mergeMap
import  {of} from 'rxjs';
import { GetTasks, GetTasksSuccess, GetTasksFailed, TasksActionType } from './admin-tasks.actions';


@Injectable()
export class tasksEffect {
  constructor(
    private actions$: Actions,
    private tasksService: AdminTasksService
  ) {}

   loadtasks = createEffect( () => {

    this.actions$.pipe(
      ofType(TasksActionType.GET_TASKS),
      switchMap(() => this.tasksService.getTasksListOfAdmin().pipe(
          map((tasks : Array<Tasks>) => new GetTasksSuccess(tasks)),
          catchError(error => new GetTasksFailed())
      ))
      
      )
    );

   })



}


