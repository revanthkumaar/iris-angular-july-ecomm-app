import {TaskActions, TasksActionType} from './admin-tasks.actions'

export const initialState = {
   tasksList: [],
   message: '',
   loading: false,
   bgClass: ''
} ;

export function tasksReducer(state = initialState, action: TaskActions) {
  switch (action.type) {
    case TasksActionType.GET_TASKS: {
        return {
            ...state,
            loading: true
        }
    }
    case TasksActionType.GET_TASKS_SUCCESS:{
        return{
            ...state,
            tasksList: action.payload
        }
        
    }
    case TasksActionType.GET_TASKS_FAILED:{ 
            return { ...state };    
    }
  }
}