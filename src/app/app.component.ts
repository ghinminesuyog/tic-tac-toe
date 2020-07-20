import { Component, Input } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';


  constructor(
    private gameService: GameService
  ) {
  }

  resetGame() {
    this.gameService.resetGame()
  }
}
