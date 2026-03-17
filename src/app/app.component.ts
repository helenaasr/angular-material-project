import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FormBuscaPassagemComponent } from './form-busca-passagem/form-busca-passagem.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BannerComponent, FormBuscaPassagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-projeto1';
}
