import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  projectId;
  tasks = [];
  issues = [];
  contributors = [];
  modelTask = {
    issue: [],
    description: '',
    cout: '',
    developer: null
  };
  modelTaskEdit = {
    _id: '',
    issue: [],
    description: '',
    cout: '',
    developer: null
  };

  constructor(private tasksService: TasksService, private issueService: IssuesService,
              private projectService: ProjetService, private route: ActivatedRoute) { }


  /**
   * Initialize the task component.
   */
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.projectId = params['id'];
    });
    this.getTasks();
    this.getIssues();
    this.getContributors();
  }

  /**
   * Get the current project task list.
   */
  getTasks() {
    this.tasksService.getTasks(this.projectId).subscribe(data => this.tasks = data['tasks']);
  }

  /**
   * Get the current project issue list.
   */
  getIssues() {
    this.issueService.getIssues(this.projectId).subscribe(data => this.issues = data['issues']);
  }

  /**
   * Get the current project contributors list.
   */
  getContributors() {
    this.projectService.getProject(this.projectId).subscribe(data => {
      this.contributors = data['project']['contributors'];
    });
  }

  /**
   * Add a task from form info.
   * @param form form containing the task info.
   */
  onSubmitTask(form: NgForm) {
    this.tasksService.addTask(this.projectId, form.value).subscribe(
      res => {
        form.resetForm();
        this.modelTask.developer = null;
        this.modelTask.issue = null;
        this.getTasks();
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * Remove a task from project.
   * @param id id of task to remove.
   */
  removeTask(id) {
    this.tasksService.removeTask(this.projectId, id).subscribe(data => this.getTasks());
  }

  /**
   * Update task edit form from task info
   * @param task task info
   */
  updateModalEditTask(task) {
    this.modelTaskEdit._id = task._id;
    this.modelTaskEdit.cout = task.cout;
    this.modelTaskEdit.description = task.description;
    this.modelTaskEdit.developer = task.developer;
    this.modelTaskEdit.issue = [];
    task.idIssues.forEach(e => this.modelTaskEdit.issue.push(e));
  }

  /**
   * Edit a task from form info
   * @param form form containing the task info
   */
  onSubmitEditTask(form: NgForm) {
    this.tasksService.editTask(this.projectId, this.modelTaskEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getTasks();
      },
      err => {
        console.log(err);
      }
    );
  }
}
