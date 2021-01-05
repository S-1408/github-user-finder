import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input,  ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';


// interface Repo {
//   html_url: string;
//   name: string;
// }
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit , OnChanges{


// for user name
  @Input() user: any;
  @Input()
  repoUrl: any;
  @Input() name: any;
  repos: any = [];
  repoNum:any;
  constructor(private githubService: GithubService,
              private ref: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.githubService.getRepos(this.name).subscribe( (repo: any) =>
    {
      console.log(repo);
      console.log(repo.length);
      this.repos = repo ;
      console.log(this.repos.length);
    this.repoNum = repo.length

      this.ref.detectChanges();
    },
    (err) =>
    {
      console.log(err);
    });
  }

  ngOnChanges(): void{


    }

}

