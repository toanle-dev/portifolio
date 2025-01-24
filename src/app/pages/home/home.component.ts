import { Component } from '@angular/core';
import { STACK } from './home.mock';
import { BusinessCardComponent } from '../../ui/business-card/business-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BusinessCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
