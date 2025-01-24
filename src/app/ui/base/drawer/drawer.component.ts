import {
  Component,
  ElementRef,
  input,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  readonly id = uuidv4();

  private host = viewChild.required('host', {
    read: ViewContainerRef,
  });

  inputToggle = viewChild.required<ElementRef>('inputToggle');

  open<T = any>(component: Type<T>) {
    // Remove qualquer conteúdo existente
    this.host().clear();

    // Cria o componente
    this.host().createComponent(component);
    this.inputToggle().nativeElement.checked =
      !this.inputToggle().nativeElement.checked;
  }
}
