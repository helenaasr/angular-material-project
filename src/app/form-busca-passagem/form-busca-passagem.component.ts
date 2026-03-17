import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-form-busca-passagem',
  imports: [MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './form-busca-passagem.component.html',
  styleUrl: './form-busca-passagem.component.scss'
})
export class FormBuscaPassagemComponent {

}
