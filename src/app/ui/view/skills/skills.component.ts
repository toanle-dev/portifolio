import { Component } from '@angular/core';
import { STACK } from '../../../pages/home/home.mock';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  backendStack = STACK.filter((a) => a.categoria == 'Backend')[0].tecnologias;
  frontendStack = STACK.filter((a) => a.categoria == 'Frontend')[0].tecnologias;
  enginesStack = STACK.filter((a) => a.categoria == 'Ferramentas Gerais')[0]
    .tecnologias;

  radarChartData: ChartData<'radar'> = {
    labels: ['Analista de Sistemas', 'Mobile', 'Backend', 'Frontend', 'UX/UI'],
    datasets: [
      {
        data: [9, 8, 9, 10, 5],
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
}
