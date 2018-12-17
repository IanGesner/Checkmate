import { Piece } from "./Piece";
import { Color } from "./Color";

export class Tile {

    private readonly _color: Color;
    private readonly _coordinate: {
        rank: Number;
        file: Number;
    };
    private _piece: Piece;

    constructor(color: Color, piece: Piece, coordinate?: {rank: Number, file: Number}) {
        this._color = color;
        this._piece = piece;
        this._coordinate = coordinate;
    }
  
    public get color(): Color {
        return this._color;
    }

    public get coordinate(): {rank: Number; file: Number;} {
        return this._coordinate;
    }
   
    public get piece(): Piece {
        return this._piece;
    }

    public set piece(value: Piece) {
        this._piece = value;
    }
}