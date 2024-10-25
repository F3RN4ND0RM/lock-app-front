import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [
    CommonModule,
  ],
 templateUrl: './privacidad.component.html',
  styleUrl: './privacidad.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacidadComponent { }
