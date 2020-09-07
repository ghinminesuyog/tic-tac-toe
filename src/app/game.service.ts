import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  xWins = 0;
  oWins = 0;
  xIsNext: boolean = false;

  game: number[] = [];

  constructor(
    public dialog: MatDialog
  ) {
    this.game = new Array(9).fill(null);
  }

  handleTurn(onTileNumber: number) {
    var by = this.getUser();

    // console.log('Player', by, 'played at position', onTileNumber);

    this.game[onTileNumber] = by;
    // console.log(this.game);
    if (this.checkWinner()) {
      this.declareWinner();
    }
    else if (this.checkforTie()) {
      this.declareTie();
    }
  }

  getGame(): number[] {
    return this.game;
  }


  getUser(): number {
    if (this.xIsNext) {
      return 0;
    }
    return 1;
  }
  setUser() {
    this.xIsNext = !this.xIsNext
  }

  checkWinner(): boolean {

    if (this.checkRows(this.game, 'row') || this.checkRows(this.game, 'col') || this.checkDiag(this.game)) {
      return true
    }

    return false;


  }

  checkRows(game, mode): boolean {

    const
      ROW = mode === "row" ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC) {

      let
        firstSquare = game[i],
        secondSquare = game[i + DIST],
        thirdSquare = game[i + (DIST * 2)];

      if (firstSquare != null && secondSquare != null && thirdSquare != null) {
        if (firstSquare === secondSquare && secondSquare === thirdSquare) {
          console.log(firstSquare, secondSquare, thirdSquare)
          return true
        }

      }
    }
    return false
  }

  checkDiag(game): boolean {
    const midSquare = game[4];

    for (let i = 0; i <= 2; i += 2) {


      let
        upperCorner = game[i],
        lowerCorner = game[8 - i];

      if (midSquare != null && upperCorner != null && lowerCorner != null) {
        if (midSquare === upperCorner && upperCorner === lowerCorner) {
          console.log(midSquare, upperCorner, lowerCorner)

          return true
        }
      }

    }
    return false;
  }

  declareWinner() {
    // console.log(this.getUser(), " Won");

    if (this.getUser() === 0) {
      this.oWins += 1
      console.log(this.oWins)
    }
    else if (this.getUser() === 1) {
      this.xWins += 1;
      console.log(this.xWins)
    }
    var player = (this.getUser() == 0) ? 'O' : 'X';
    var msg = player + ' won the game!'
    this.displayMessage(msg)
  }
  declareTie() {
    this.displayMessage('Game Tied!');
  }
  displayMessage(msg: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      data: {
        message: msg
      }
    })

    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.resetGame();
        }
      }
    )
  }

  checkforTie() {
    for (var i = 0; i < 9; i++) {

      if (this.game[i] == null)
        return false;
    }
    return true;
  }

  // gameOver(): boolean {
  //   var counter = 0;
  //   for (var i=0; i<9; i++) {
  //     console.log(this.game[i]);
  //     if (this.game[i] === null) {
  //       counter += 1;
  //       if (counter == 8) {
  //         console.log(counter)
  //         return true
  //       }
  //     }

  //   }

  //   return false;
  // }

  resetGame() {
    this.game = []
    this.game = new Array(9).fill(null);
    this.xIsNext = false
  }
}
