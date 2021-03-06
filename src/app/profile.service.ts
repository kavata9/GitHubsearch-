import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class ProfileService {

  private username:string;
   private client_id = environment.clientId;
  private client_secret = environment.clientSecret;
  constructor(private http:Http) { 
console.log("service is now ready");
this.username='username';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/"+ this.username +'?client_id=' + this.client_id + '&client_secret='
    + this.client_secret)
    .map(res=>res.json());
  }
  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret='
     + this.client_secret)
   .map(res => res.json());
  }
  updateProfile(username:string){
    this.username=username;

  }
}
