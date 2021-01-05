import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit( f: NgForm){
    // tslint:disable-next-line:one-variable-per-declaration
    const { email, password } = f.form.value;

    this.authService.signUp(email, password).then((res) => {
      this.router.navigateByUrl('/home');
      this.toastr.success('Signup Success');
    })
    .catch((err) => {
      console.log(err.message);
      this.toastr.error('Signup failed');
    });
  }

}
