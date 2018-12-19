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

  constructor(private _gameService: GameService, private _renderer: Renderer2) { }

  ngOnInit() { }

  onTileClicked() {
    console.log('in onTileClicked()');
    if (this._gameService.selectedTile) {
      this._gameService.movePiece(this._tile);
    }
    else if (this._tile.piece && this._tile.piece.color === this._gameService.ownedColor) {
      this._gameService.selectedTile = this._tile;      
    }
    else {
      this.invalidTileSelectionWarning();
    }
  }


  private invalidTileSelectionWarning() {
    console.log('invalidTileSelectionWarning()');
    this._renderer.setStyle(this.tileDiv, 'border-color', 'red');
    setTimeout(() => {

    }, 1000);

  }

}
