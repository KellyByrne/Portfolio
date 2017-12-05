import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  projects;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
     this.projectsService.getProjects()
      .subscribe(
        (projects) => {
          this.projects = projects;
          console.log(projects);
        },
        (error) => console.log(error)
      );
  }

}
