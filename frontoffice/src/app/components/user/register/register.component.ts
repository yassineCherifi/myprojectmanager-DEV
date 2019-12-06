import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  successmessage: boolean;
  errormessage: string;
  constructor(private userService: UserService) { }

  /**
   * Initialize the register component.
   */
  ngOnInit() {}

  /**
   * Register a new user from form info.
   * @param form form containing the new user credentials.
   */
  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.successmessage = true;
        setTimeout(() => this.successmessage = false, 4000);
        this.resetForm(form);
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

  /**
   * Reset the register form.
   * @param form form to reset.
   */
  resetForm(form: NgForm) {
    this.userService.user = {
      name: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.errormessage = '';

  }

}
