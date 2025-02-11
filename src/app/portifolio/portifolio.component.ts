import { Component } from '@angular/core';

import { SkillButtonComponent } from '../ui/skill-button/skill-button.component';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [SkillButtonComponent],
  templateUrl: './portifolio.component.html',
})
export class PortifolioComponent {
  email = 'toan.rle@outlook.com';

  openLinkedin(): void {
    window.open(
      'https://www.linkedin.com/in/toan-rodrigues-le-08868794/',
      '_blank'
    );
  }

  openGithub(): void {
    window.open('https://github.com/toanle-dev', '_blank');
  }

  openWhatsApp() {
    window.open('https://wa.me/5548991921025/', '_blank');
  }
}
