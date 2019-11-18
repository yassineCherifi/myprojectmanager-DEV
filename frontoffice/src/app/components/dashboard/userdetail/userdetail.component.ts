import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html'
})
export class UserdetailComponent implements OnInit {

  successmessage: boolean;
  errormessage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

   onSubmit(form: NgForm) {
    this.userService.editUser(form.value).subscribe(
      res => {
        this.successmessage = true;
        setTimeout(() => this.successmessage = false, 4000);
      },
      err => {
        if (err.status === 442) {
          this.errormessage = err.error.join('<br/>');
        }
        else {
          this.errormessage = 'Une erreur est survenue dans le serveur';
        }
      }

    );
  }

}
