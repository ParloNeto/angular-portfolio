import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estagiário em Desenvolvimento de Software',
        p: 'Serasa Experian | Ago 2023 - Present',
      },
    text: '<p>Desde agosto de 2023, após exatamente um ano como jovem aprendiz, fui aprovado no processo seletivo de estágio da Serasa Experian e estou atuando como desenvolvedor de software, destacando-me nas áreas de Front-end com Angular e Back-end com Java Spring Boot.</p><p>Participei de projetos de migração de APIs para a Cloud (de Mainframe para AWS).</p><p>Trabalhei com ferramentas como: Cucumber, Cypress, Docker, Jenkins, Veracode, Kubernetes, Figma, Apache Kafka, MongoDB e MySQL.</p>'
    },
    {
      summary: {
        strong: 'Jovem Aprendiz em Desenvolvimento de Software',
        p: 'Serasa Experian | Ago 2022 - Jul 2023',
      },
      text: '<p>Comecei minha jornada profissional em 2022, após concluir o programa Transforme-se, criado pela Serasa Experian com a intenção de inserir jovens de baixa renda e escolaridade pública no mundo da Tecnologia.</p><p>Ao ingressar na empresa, iniciei meus estudos na linguagem Java. Após 4 meses, passei a explorar mais sobre o framework Spring Boot e também sobre o Angular.</p><p>Além disso, participei de um projeto full-stack, exclusivo para jovens aprendizes e estagiários, com o objetivo de simular os projetos e processos do dia-a-dia de um desenvolvedor.</p><p>Destaquei-me ao realizar entregas além do esperado para um jovem aprendiz, evidenciando um alto índice de aprendizado em poucos meses dentro do universo da programação.</p>'
    },
  ]);
}
