import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopButtonsService {
  //private httpClient = inject(HttpClient);

  constructor(private httpClient : HttpClient) { 
    
  }

  reporte(){
    console.log (this.httpClient.get<string>('http://localhost:8080/v1/reporte/gen').subscribe(
      _ => {
        console.log(_)
      },error => {console.log(error)}
    ));
    

  }
}
