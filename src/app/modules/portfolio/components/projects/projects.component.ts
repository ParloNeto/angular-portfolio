import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/parlo-logo.png',
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
    {
      src: 'assets/img/projects/logo-fut-search.png',
      alt: 'Fut Search Logo',
      title: 'Fut Search Fifa',
      width: '150px',
      height: '50px',
      description: '<p><strong>Fut-Search-FIFA: Criando a Sua Própria Experiência no FIFA Ultimate Team</strong></p><p>Desenvolvi o projeto <em>Fut-Search-FIFA</em> com o objetivo de proporcionar aos fãs do FIFA Ultimate Team uma experiência personalizada. Com um <em>FRONT-END</em> dinâmico em <em>Angular</em> e um <em>BACK-END</em> em <em>Spring Boot</em>, este projeto permite a criação e customização de cartas de jogadores, inspiradas diretamente no popular modo on-line da franquia FIFA, o FIFA Ultimate Team.</p><p><strong>Principais Recursos:</strong></p><ol><li><strong>Personalização Completa:</strong><ul><li>Escolha a versão do FIFA que mais lhe agrada disponíveis até o momento (FIFA 16, 17, 18, 19).</li><li>Altere nome, imagem e atributos da carta para criar o jogador dos seus sonhos.</li></ul></li><li><strong>Diversidade de Cartas Especiais:</strong><ul><li>Explore diversas variações de cartas especiais, assim como no FIFA Ultimate Team oficial.</li></ul></li><li><strong>Armazenamento Seguro:</strong><ul><li>O BACK-END em Spring Boot Java é responsável por salvar as cartas no banco de dados, garantindo a segurança e integridade das suas criações.</li></ul></li><li><strong>Busca Eficiente:</strong><ul><li>Todas as cartas criadas são exibidas na página inicial de busca de jogadores, proporcionando uma navegação fácil e rápida.</li></ul></li><li><strong>Controle Total:</strong><ul><li>Além de criar, é possível deletar as cartas, dando total controle sobre a sua coleção personalizada.</li></ul></li></ol><p><strong>Inspiração na Franquia FIFA:</strong>Este projeto foi diretamente inspirado no FIFA Ultimate Team da EA SPORTS. Assim como no modo on-line 1x1, o <em>Fut-Search-FIFA</em> permite que você crie e gerencie suas próprias cartas de jogadores, oferecendo a liberdade de personalização em até quatro versões distintas.</p><p><strong>Conecte-se com o Mundo do FIFA de Uma Maneira Única:</strong>O <em>Fut-Search-FIFA</em> não é apenas um projeto técnico, mas uma oportunidade de mergulhar ainda mais na experiência FIFA, trazendo para você a emoção de criar e colecionar jogadores personalizados.</p><p><strong>De um fã, para outros fãs.</strong></p>',
      links: [
        {
          name: 'Repositório no GitHub',
          href: 'https://github.com/ParloNeto/fifa-search',
        },
      ],
    },
    {
      src: 'assets/img/projects/playmaker-hub.png',
      alt: 'Playmaker Hub Logo',
      title: 'Playmaker Hub',
      width: '150px',
      height: '50px',
      description: '<p><strong>Fut-Search-FIFA: Criando a Sua Própria Experiência no FIFA Ultimate Team</strong></p><p>Desenvolvi o projeto <em>Fut-Search-FIFA</em> com o objetivo de proporcionar aos fãs do FIFA Ultimate Team uma experiência personalizada. Com um <em>FRONT-END</em> dinâmico em <em>Angular</em> e um <em>BACK-END</em> em <em>Spring Boot</em>, este projeto permite a criação e customização de cartas de jogadores, inspiradas diretamente no popular modo on-line da franquia FIFA, o FIFA Ultimate Team.</p><p><strong>Principais Recursos:</strong></p><ol><li><strong>Personalização Completa:</strong><ul><li>Escolha a versão do FIFA que mais lhe agrada disponíveis até o momento (FIFA 16, 17, 18, 19).</li><li>Altere nome, imagem e atributos da carta para criar o jogador dos seus sonhos.</li></ul></li><li><strong>Diversidade de Cartas Especiais:</strong><ul><li>Explore diversas variações de cartas especiais, assim como no FIFA Ultimate Team oficial.</li></ul></li><li><strong>Armazenamento Seguro:</strong><ul><li>O BACK-END em Spring Boot Java é responsável por salvar as cartas no banco de dados, garantindo a segurança e integridade das suas criações.</li></ul></li><li><strong>Busca Eficiente:</strong><ul><li>Todas as cartas criadas são exibidas na página inicial de busca de jogadores, proporcionando uma navegação fácil e rápida.</li></ul></li><li><strong>Controle Total:</strong><ul><li>Além de criar, é possível deletar as cartas, dando total controle sobre a sua coleção personalizada.</li></ul></li></ol><p><strong>Inspiração na Franquia FIFA:</strong>Este projeto foi diretamente inspirado no FIFA Ultimate Team da EA SPORTS. Assim como no modo on-line 1x1, o <em>Fut-Search-FIFA</em> permite que você crie e gerencie suas próprias cartas de jogadores, oferecendo a liberdade de personalização em até quatro versões distintas.</p><p><strong>Conecte-se com o Mundo do FIFA de Uma Maneira Única:</strong>O <em>Fut-Search-FIFA</em> não é apenas um projeto técnico, mas uma oportunidade de mergulhar ainda mais na experiência FIFA, trazendo para você a emoção de criar e colecionar jogadores personalizados.</p><p><strong>De um fã, para outros fãs.</strong></p>',
      links: [
        {
          name: 'Repositório no GitHub',
          href: 'https://github.com/ParloNeto/fifa-search',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
