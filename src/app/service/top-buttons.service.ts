import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopButtonsService {
  private httpClient = inject(HttpClient);

  constructor() { 
    
  }

  reporte(){
    console.log (this.httpClient.get<any>('localhost:8080/v1/reporte/gen'));
    

  }
}
