import { Component, OnInit, OnChanges } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(
    private gameService: GameService,
  ) {}

}
