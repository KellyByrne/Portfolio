import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-illustrator',
  templateUrl: './illustrator.component.html',
  styleUrls: ['./illustrator.component.css']
})
export class IllustratorComponent implements OnInit {
 projects = [];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
     this.projectsService.getProjects().subscribe(results => {
          results.forEach( result => {
            if (result.category === "illustrator") {
              this.projects.push(result);
            }
          })
        },
        (error) => console.log(error)
      )

     console.log(this.projects);
  }

}
