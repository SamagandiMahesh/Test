import { Component, OnInit } from "@angular/core";
import { JobService } from "../services/job.service";

@Component({
  selector: "app-job-queue",
  templateUrl: "./job-queue.component.html",
  styleUrls: ["./job-queue.component.scss"]
})
export class JobQueueComponent implements OnInit {
  constructor(private jobService: JobService) {}

  public jobData : any;

  ngOnInit() {
    this.getJobDetails();
  }

  getJobDetails() {
    this.jobService.getJobList().subscribe(
      data => {
        console.log(data);
        this.jobData = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
