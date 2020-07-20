import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameService } from '../game.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<DialogComponent>,
    // private gameService: GameService
  ) { }

  ngOnInit() {
  }

  resetGame() {
    // this.gameService.resetGame();

    this.dialogRef.close(true);

  }

}
