import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private userService: UserService, private router : Router) { }

  model = {
    email: '',
    password: ''
  }
  errormessage : string;

  /**
   * Initialize the login component.
   */
  ngOnInit() {}

  /**
   * Login the user from form info.
   * @param form form containing the login credentials.
   */
  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/dashboard/projects');
      },

      err => {
        this.errormessage = err.error.message;
      }

    );

  }

}
