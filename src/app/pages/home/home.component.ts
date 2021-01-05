
import { GithubService } from './../../services/github.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  userName!: string;
  user: any;
  error: any;

  constructor(private githubService: GithubService,
              private  ref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  handleFinduser(){
    this.githubService.getUserDetails(this.userName).subscribe((user: any ) =>
    {
      console.log(user);
      this.user = user;
      this.error = null;
      this.ref.detectChanges();
      // this.getRepoUrl();
    },
    (error) => {
      this.user = null;
      this.error = 'User Not found';
      this.ref.detectChanges();
    });

  }

  // tslint:disable-next-line:typedef
  getRepoUrl(){
    this.githubService.getRepos(this.userName).subscribe((user: any)  =>
    {
      console.log(user);
      this.user.repos_url = user.repos_url;
    });
  }


}
