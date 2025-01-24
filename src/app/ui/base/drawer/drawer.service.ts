import { Injectable, Type } from '@angular/core';
import { DrawerComponent } from './drawer.component';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawer!: DrawerComponent;

  create(drawer: DrawerComponent): DrawerService {
    this.drawer = drawer;
    return this;
  }

  open<T = any>(ref: Type<T>) {
    this.drawer.open(ref);
  }
}
