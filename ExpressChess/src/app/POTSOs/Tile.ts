import { Piece } from "./Piece";
import { Color } from "./Color";

export class Tile {

    private readonly _color: Color;
    private readonly _coordinate: {
        file: number;
        rank: number;
    };
    private _piece: Piece;

    constructor(color: Color, piece: Piece, coordinate?: {file: number, rank: number}) {
        this._color = color;
        this._piece = piece;
        this._coordinate = coordinate;
    }
  
    public get color(): Color {
        return this._color;
    }

    public get coordinate(): {file: number; rank: number;} {
        return this._coordinate;
    }
   
    public get piece(): Piece {
        return this._piece;
    }

    public set piece(value: Piece) {
        this._piece = value;
    }
}