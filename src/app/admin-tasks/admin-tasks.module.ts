import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AdminTasksComponent } from './admin-tasks.component';


@NgModule({
  declarations: [
    AdminTasksComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({}), //your angular app is now utilizing a ngrx store
  ],
})
export class AdminTasksModule {}
