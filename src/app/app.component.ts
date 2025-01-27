import { Component, inject, OnInit, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from './ui/base/drawer/drawer.component';
import { DrawerService } from './ui/base/drawer/drawer.service';
import { LoaderComponent } from './ui/base/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawerComponent, LoaderComponent],
  template: `
    <app-drawer #drawer></app-drawer>

    @if (isLoading) {
    <app-loader></app-loader>

    } @else {
    <router-outlet></router-outlet>

    }
  `,
})
export class AppComponent implements OnInit {
  isLoading = true;

  drawer = viewChild.required<DrawerComponent>('drawer');
  drawerService = inject(DrawerService);

  ngOnInit(): void {
    this.drawerService.create(this.drawer());
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
