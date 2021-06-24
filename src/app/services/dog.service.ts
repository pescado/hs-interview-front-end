import { Injectable } from '@angular/core';
import { DogController } from 'src/app/api/dogApi/dogController';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private dogController: DogController) { }

  // Simulates an http.get
  dogs$ = this.dogController.dogs$;
}
