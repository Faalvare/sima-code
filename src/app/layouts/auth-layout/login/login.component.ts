import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.errorMessage();
      // return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
        this.loading = false;
      },
      error => {
        this.error = error;
        console.log(this.error);
        this.errorMessage();
        this.loading = false;
      });
  }

  errorMessage() {
    Swal.fire({
      title: 'Opsss...',
      text: 'El usuario o la contraseña que utilizaste tiene un error, corrige y vuelve a intentar',
      type: 'error',
      confirmButtonColor: '#F27474'
    });
    return;
  }

}
