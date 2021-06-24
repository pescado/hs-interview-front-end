import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Handler } from "src/app/models/models";

const handlers: Handler[] = [
  { name: 'Jane', status: 'Full time', yearsExperience: 2 },
  { name: 'Bob', status: 'Part time', yearsExperience: 1 },
  { name: 'Waldo', status: 'Unknown', yearsExperience: 0 },
  { name: 'Jimbo', status: 'Full time', yearsExperience: 4 },
  { name: 'Glenda', status: 'Part time', yearsExperience: 3 }
];

@Injectable({
  providedIn: 'root'
})
export class HandlerController {
  handlers$: Observable<Handler[]> = of(handlers);
}