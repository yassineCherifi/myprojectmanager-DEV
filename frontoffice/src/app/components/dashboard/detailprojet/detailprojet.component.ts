import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/services/issues.service';
import { NgForm } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-detailprojet',
  templateUrl: './detailprojet.component.html',
  styleUrls: ['./detailprojet.component.scss']
})
export class DetailprojetComponent implements OnInit {


  public issues = [];

  public project;
  

  constructor(private issuesService : IssuesService, private projetService : ProjetService) { }

  
  model = {
    description: '',
    priorite: '',
    difficulte: '',
    status: ''
  }


  ngOnInit() {   
    this.project = this.projetService.getSelectedProject();
  }

  removeIssue(id){
    this.issuesService.removeIssue(this.project['_id'],id).subscribe(data => console.log(data));
  }



  onSubmit(form: NgForm) {
    this.issuesService.addIssue(this.project['_id'],form.value).subscribe(
      res => {
        form.resetForm();
      },
      err => {
        console.log(err);
      }
    );
    console.log(this.project)
  }



}
