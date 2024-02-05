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
    text: '<p>Desde agosto de 2023, após o exato 1 ano como jovem aprendiz, passei no processo seletivo de estágio da Serasa Experian e estou atuando como desenvolvedor de software, destacando-me nas áreas Front-end com Angular, e Back-end com Java Spring Boot.</p><p>Participei de projetos de migração de APIs para a Cloud (<strong>Mainframe à AWS</strong>).</p><p>Atuei em ferramentas como: Cucumber, Cypress, Docker, Jenkins, Veracode, Kubernetes, Figma, Apache Kafka, MongoDB e MySQL.</p><p>Também irei conhecer a área de Engenharia de Dados lidando com Big Data futuramente.</p>',
    },
    {
      summary: {
        strong: 'Jovem Aprendiz em Desenvolvimento de Software',
        p: 'Serasa Experian | Ago 2022 - Jul 2023',
      },
      text: '<p>Comecei minha jornada profissional em 2022, após concluir o programa Transforme-se, criado pela Serasa Experian na intenção de inserir jovens de baixa renda e escolaridade pública no mundo da Tecnologia. Ao entrar na empresa comecei meus estudos na linguagem Java, após 4 meses comecei a ver mais sobre o framework Spring Boot e também sobre o Angular, além de adentrar um projeto full-stack da área que somente participava jovens aprendizes e estagiários, afim de simular como são os projetos e processos do dia-a-dia de um Desenvolvedor. Nele me destaquei por em poucos meses dentro do mundo da programação, consegui realizar entregas além do esperado para um jovem aprendiz e um alto índice de aprendizado.</p>',
    },
  ]);
}
