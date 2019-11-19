import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  project_id;
  tasks = [];
  issues = [];
  users = [];
  modelTask = {
    issue: [],
    description: '',
    cout: '',
    developer: null
  }
  modelTaskEdit = {
    _id: '',
    issue: [],
    description: '',
    cout: '',
    developer: null
  }
  tests = ["1","2"]
  constructor(private tasksService: TasksService, private issueService: IssuesService,
    private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id'];
    })
    this.getTasks();
    this.getIssues();
    this.getUsers();
  }

  getTasks() {
    this.tasksService.getTasks(this.project_id).subscribe(data => this.tasks = data['tasks']);
  }
  getIssues() {
    this.issueService.getIssues(this.project_id).subscribe(data => this.issues = data['issues']);
  }
  getUsers() {
    this.userService.getUsers().subscribe(data => { this.users = data['users'] });

  }

  onSubmitTask(form: NgForm) {
    console.log(form.value)
    this.tasksService.addTask(this.project_id, form.value).subscribe(
      res => {
        form.resetForm();
        this.modelTask.developer = null;
        this.modelTask.issue = null;
        this.getTasks()
      },
      err => {
        console.log(err);
      }
    );
  }
  removeTask(id) {
    this.tasksService.removeTask(this.project_id, id).subscribe(data => this.getTasks());
  }

  updateModalEditTask(task) {
    this.modelTaskEdit._id = task._id;
    this.modelTaskEdit.cout = task.cout;
    this.modelTaskEdit.description = task.description;
    this.modelTaskEdit.developer = task.developer;
    this.modelTaskEdit.issue = [];
    task.idIssues.forEach(e => this.modelTaskEdit.issue.push(e));
  }
  onSubmitEditTask(form: NgForm) {
    this.tasksService.editTask(this.project_id, this.modelTaskEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getTasks()
      },
      err => {
        console.log(err);
      }
    );
  }
}
