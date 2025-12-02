import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SpesaService {
  private x ="https://animated-bassoon-g4x9jwjq99rxfwpr7-5000.app.github.dev/spesa";

  constructor(private http: HttpClient) {}

  getLista() {
    return this.http.get(this.x);
  }

  aggiungiElemento(elemento: string) {
    return this.http.post(this.x, { elemento });
  }
}