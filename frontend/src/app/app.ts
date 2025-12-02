import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpesaService } from './services/spesa-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  lista = signal<any[]>([]);
  nuovoElemento = signal('');

  constructor(private spesa: SpesaService) {}
  ngOnInit() {
    this.caricaLista();
  }
  caricaLista() {
    this.spesa.getLista().subscribe((dati: any) => {
      this.lista.set(dati);
    });
  }

  aggiungi() {
    const val = this.nuovoElemento().trim();
    if (!val) return;

  this.spesa.aggiungiElemento(val).subscribe(() => {
    this.nuovoElemento.set('');
    this.caricaLista();
    });
  }
}