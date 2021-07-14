import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as taskListActions from './admin-tasks.actions'


@Component({
  selector: 'app-admin-tasks',
  templateUrl: './admin-tasks.component.html',
  styleUrls: ['./admin-tasks.component.scss']
})
export class AdminTasksComponent implements OnInit {

  tasksList : Array<Tasks>;
  loading: boolean;
  error: string;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

      this.store.dispatch(new taskListActions.GetTasks);

      
  }

}
