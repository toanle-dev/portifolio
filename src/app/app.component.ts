import { Component, inject, OnInit, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from './ui/base/drawer/drawer.component';
import { DrawerService } from './ui/base/drawer/drawer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawerComponent],
  template: `
    <app-drawer #drawer></app-drawer>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  drawer = viewChild.required<DrawerComponent>('drawer');
  drawerService = inject(DrawerService);

  ngOnInit(): void {
    this.drawerService.create(this.drawer());
  }
}
