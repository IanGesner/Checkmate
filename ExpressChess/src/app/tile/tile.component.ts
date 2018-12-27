import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Piece } from '../POTSOs/Piece';
import { Color } from '../POTSOs/Color';
import { Tile } from '../POTSOs/Tile';
import { GameService } from '../Services/game-service';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @ViewChild('tileDiv')
  tileDiv: ElementRef;

  @Input()
  private _tile: Tile;
  public get tile(): Tile {
    return this._tile;
  }
  public set tile(value: Tile) {
    this._tile = value;
  }

  @Input()
  private _color: Color;
  public get color(): Color {
    return this._color;
  }

  public tileWarning;

  constructor(private _gameService: GameService) { 
    console.log("in ctor");
  }

  ngOnInit() {
    console.log("in onInit()");
   }

  onTileClicked() {
    console.log('in onTileClicked()');

    if (this._gameService.selectedTile) {
      console.log('moving piece to: ' + this._tile.coordinate.file + ', ' + this._tile.coordinate.rank);
      this._gameService.movePiece(this._tile);
    }
    else if (this._tile.piece && this._tile.piece.color === this._gameService.ownedColor) {
      console.log('selecting piece');
      this._gameService.selectedTile = this._tile;      
    }
    else {
      console.log('invalid tile selection');
      this.invalidTileSelectionWarning();
    }
  }

  private getOutlineStyle(){
    return this.tileWarning ? 'red' : 'black';
  }


  private invalidTileSelectionWarning() {
    console.log('invalidTileSelectionWarning()');
    this.tileWarning = true;
    setTimeout(() => {
      // this._outlineColor = 'black';
    }, 1000);

  }

}
