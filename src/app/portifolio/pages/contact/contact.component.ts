import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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
