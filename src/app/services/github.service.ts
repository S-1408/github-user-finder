import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // private url = 'http://api.github.com/users/S-1408';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getUserDetails(userName: string){
  return   this.http.get(`http://api.github.com/users/${userName}`);
  }

  // tslint:disable-next-line:typedef
  getRepos(userName: string){
    return this.http.get(`http://api.github.com/users/${userName}/repos`);
  }

}
