import { Component } from '@angular/core';
import { TopButtonsService } from 'src/app/service/top-buttons.service';
import { inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-top-buttons',
  templateUrl: './top-buttons.component.html',
  styleUrls: ['./top-buttons.component.scss']
})
export class TopButtonsComponent {
  bottonService = inject(TopButtonsService)


  async reporte() {
    const response = await this.bottonService.reporte();
    console.log (response);
  }
}

