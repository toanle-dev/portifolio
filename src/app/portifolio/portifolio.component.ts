import { Component, inject } from '@angular/core';

import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './portifolio.component.html',
})
export class PortifolioComponent {
  private router = inject(Router);
  showLinks() {
    this.router.navigate(['/links']);
  }
}
