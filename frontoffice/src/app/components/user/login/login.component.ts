import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private userService: UserService, private router : Router) { }

  model = {
    email: '',
    password: ''
  }
  errormessage : string;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/dashboard/projects');
      },

      err => {
        this.errormessage = err.error.message;
      }

    );

  }

}
