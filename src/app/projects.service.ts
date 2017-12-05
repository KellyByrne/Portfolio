import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
  constructor(private http: Http) {}
 
  getProjects() {
    return this.http.get('http://pacific-fortress-41036.herokuapp.com/api/projects')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }
 
}