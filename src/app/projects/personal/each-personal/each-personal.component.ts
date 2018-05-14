import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProjectsService } from '../../../projects.service';

@Component({
  selector: 'app-each-personal',
  templateUrl: './each-personal.component.html',
  styleUrls: ['./each-personal.component.css']
})
export class EachPersonalComponent implements OnInit {
  project;
  id: string;
  constructor(private projectsService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
     this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.projectsService.getProject(this.id)
          .subscribe(result => {
              this.project = result;
              console.log(this.project);
              }, (error) => console.log("Error" + error)
          )
        }
      );
  }
}
