import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  projects = [];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
     this.projectsService.getProjects().subscribe(results => {
          results.forEach( result => {
            if (result.category === "personal") {
              this.projects.push(result);
            }
          })
        },
        (error) => console.log(error)
      )

     console.log(this.projects);
  }
}
