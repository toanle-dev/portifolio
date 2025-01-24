import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';

import { DrawerService } from '../base/drawer/drawer.service';
import { SkillsComponent } from '../view/skills/skills.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss',
})
export class BusinessCardComponent {
  private drawer = inject(DrawerService);
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  openDetail(event: Event) {
    event.stopImmediatePropagation();

    this.drawer.open(SkillsComponent);
  }

  openGithubLink(event: Event): void {
    event.stopImmediatePropagation();

    window.open('https://github.com/toanle-dev', '_blank');
  }

  openLinkedinLink(event: Event): void {
    event.stopImmediatePropagation();

    window.open(
      'https://www.linkedin.com/in/toan-rodrigues-le-08868794/',
      '_blank'
    );
  }
}
