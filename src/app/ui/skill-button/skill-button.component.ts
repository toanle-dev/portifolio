import { Component, ElementRef, viewChild } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { STACK } from '../../portifolio/portifolio.mock';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-skill-button',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './skill-button.component.html',
  styleUrl: './skill-button.component.scss',
})
export class SkillButtonComponent {
  constructor() {
    setTimeout(() => this.toggleDetail(), 100);
  }
  drawerId = 'drawerid';

  inputToggle = viewChild.required<ElementRef>('inputToggle');

  backendStack = STACK.filter((a) => a.categoria == 'Backend')[0].tecnologias;
  frontendStack = STACK.filter((a) => a.categoria == 'Frontend')[0].tecnologias;
  enginesStack = STACK.filter((a) => a.categoria == 'Ferramentas Gerais')[0]
    .tecnologias;

  radarChartData: ChartData<'radar'> = {
    labels: ['Analista de Sistemas', 'Mobile', 'Backend', 'Frontend', 'UX/UI'],
    datasets: [
      {
        data: [9, 9, 8, 10, 5],
        label: 'Minha Experiência',
        pointStyle: false,
        showLine: true,
      },
    ],
  };

  radarChartOptions: ChartOptions = {
    responsive: false,

    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          display: false,
          stepSize: 2,
        },

        suggestedMin: 0,
        suggestedMax: 11,
      },
    },
  };

  toggleDetail() {
    this.inputToggle().nativeElement.checked =
      !this.inputToggle().nativeElement.checked;
  }
}
