import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-condiciones',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './condiciones.component.html',
  styleUrl: './condiciones.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CondicionesComponent { }
