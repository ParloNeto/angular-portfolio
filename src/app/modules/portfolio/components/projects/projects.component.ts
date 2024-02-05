import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: '../../../../../assets/img/projects/parlo-logo.png',
      alt: 'Paulo Logo',
      title: 'Paulo Logo',
      width: '150px',
      height: '150px',
      description: '',
      links: [
        {
          name: 'Conheça meu trabalho como designer',
          href: 'https://www.instagram.com/parloart/',
        },
      ],
    },
  ]);
}
