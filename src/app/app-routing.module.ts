import { JobDetailsComponent } from './job-details/job-details.component';
import { JobQueueComponent } from './job-queue/job-queue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: JobQueueComponent
  },
  {
    path: 'jobs',
    component: JobQueueComponent
  },
  {
    path: 'jobDetails',
    component: JobDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
