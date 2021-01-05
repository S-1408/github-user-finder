import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  email = null;
  
  constructor(private auth: AuthService,
              private router: Router,
              private toastr: ToastrService)
   {

    this.auth.getUser().subscribe((user: any) => {
     // this.email = user?.email;
     this.email = user;
    });
   }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  async handleSignOut(){
    try {
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/sign-in');
      this.toastr.info('Login Again to countinue');
      this.email = null;
    } catch (error) {
      this.toastr.error('Something is wrong');
      
    }
  }
}
