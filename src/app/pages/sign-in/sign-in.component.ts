import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

ngOnInit(): void {
}

// tslint:disable-next-line:typedef
onSubmit( f: NgForm){
// tslint:disable-next-line:one-variable-per-declaration
const { email, password } = f.form.value;

this.authService.signIn(email, password).then((res) => {
this.router.navigateByUrl('/');
this.toastr.success('SignIn Success');
})
.catch((err) => {
console.log(err.message);
this.toastr.error('SignIn failed');
});
}
}
