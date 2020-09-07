import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-tile',
  template: `<div class ="tile" (click)="tileClicked()">

    <div class ="o" *ngIf = "tileValue == 0">O</div>
    <div class ="x" *ngIf = "tileValue == 1">X</div>

  </div>`,
  styles: [`.tile{
    height:100px;
    width:100px;
    line-height:100px;
    background-color:cornflowerblue;
    box-shadow:4px 4px darkslateblue;
    font-size:80px;
    cursor: pointer;
    border-radius: 20px;
    
  }
  .x,.o{
    color:white
  }

  @media only screen and  (min-width: 1020px){
   .tile{ height:10vw;
    width:10vw;
    line-height:10vw;
    font-size:8vw;
    }
  }
  `
  ]
})
export class TileComponent implements OnInit {

  hasBeenClicked: boolean = false;
  @Input() tileValue;
  @Input() tilePosition;



  constructor(
    private gameService: GameService
  ) {

  }

  ngOnInit() {
  }

  tileClicked() {


    if (this.tileValue == null) {
      this.gameService.handleTurn(this.tilePosition);

      this.gameService.setUser()
    }


  }

}
