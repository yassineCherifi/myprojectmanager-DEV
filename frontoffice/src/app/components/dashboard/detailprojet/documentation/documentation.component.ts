import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IssuesService } from 'src/app/services/issues.service';
import { DocumentationsService } from 'src/app/services/documentations.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html'
})
export class DocumentationComponent implements OnInit {
  project_id;
  issues = [];
  documentations = [];
  modelDocumentation = {
    title: '',
    description: '',
    link: ''
  }

  modelDocumentationEdit = {
    _id: '',
    title: '',
    description: '',
    link: ''
  }


  constructor(private documentationService: DocumentationsService, private issueService: IssuesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id'];
    })
    this.getDocumentations();
    this.getIssues();

  }
  getIssues() {
    this.issueService.getIssues(this.project_id).subscribe(data => this.issues = data['issues']);
  }
  getDocumentations() {
    this.documentationService.getDocumentations(this.project_id).subscribe(data => this.documentations = data['documentations']);
  }
  onSubmitDocumentation(form: NgForm){
    this.documentationService.addDocumentation(this.project_id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getDocumentations()
      },
      err => {
        console.log(err);
      }
    );
  }

  removeDocumentation(id) {
    this.documentationService.removeDocumentation(this.project_id, id).subscribe(data => this.getDocumentations());
  }

  updateModalEditDocumentation(documentation) {
    this.modelDocumentationEdit._id = documentation._id;
    this.modelDocumentationEdit.title = documentation.title;
    this.modelDocumentationEdit.description = documentation.description;
    this.modelDocumentationEdit.link = documentation.link;
  }

  onSubmitEditDocumentation(form: NgForm) {
    this.documentationService.editDocumentation(this.project_id, this.modelDocumentationEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getDocumentations()
      },
      err => {
        console.log(err);
      }
    );
  }
}
