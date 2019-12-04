import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html'
})
export class UserdetailComponent implements OnInit {

  successmessage: boolean;
  errormessage: string;
  constructor(private userService: UserService) { }

  /**
   * Initialize the UserDetail component.
   */
  ngOnInit() {}


  /**
   * Edit the current user from form info.
   * @param form form containing the user info.
   */
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
