import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class JobService {
  public jobData = [
    {
      name: "job1",
      description: "description",
      status: "Done",
      priority: "2"
    },
    {
      name: "job2",
      description: "description",
      status: "Running",
      priority: "6"
    },
    {
      name: "job3",
      description: "description",
      status: "Done",
      priority: "5"
    },
    {
      name: "job4",
      description: "description",
      status: "Done",
      priority: "2"
    },
    {
      name: "job5",
      description: "description",
      status: "Not started",
      priority: "1"
    },
    {
      name: "job6",
      description: "description",
      status: "Queued",
      priority: "5"
    },
    {
      name: "job7",
      description: "description",
      status: "Running,",
      priority: "4"
    },
    {
      name: "job8",
      description: "description",
      status: "Not started",
      priority: "1"
    },
    {
      name: "job9",
      description: "description",
      status: "Queued",
      priority: "2"
    }
  ];
  constructor() {}

  getJobList() {
    // return this.http.get('/api/food');

    return of(this.jobData);
  }
}
