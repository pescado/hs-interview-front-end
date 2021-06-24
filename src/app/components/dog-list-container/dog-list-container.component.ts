import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dog } from 'src/app/models/models';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-list-container',
  templateUrl: './dog-list-container.component.html',
  styleUrls: ['./dog-list-container.component.scss'],
})
export class DogListContainerComponent implements OnInit {

  constructor(private dogService: DogService) { }

  ngOnInit() {
  }
}
