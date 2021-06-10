import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Criado no curso <b><a href="https://devinvestidor.com.br/portfolio/curso-full-stack-completo/" target="_blank">Full-Stack 100% JavaScript</a></b>
    </span>
  `,
})
export class FooterComponent {
}
