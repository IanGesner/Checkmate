import { Color } from "./Color";


export class Piece {

    constructor(color: Color, type: Type){
        this._color = color;
        this._type = type;
        this._moveCount = 0;
    }

    private _color: Color;
    public get color(): Color {
        return this._color;
    }

    private _type: Type;
    public get type(): Type {
        return this._type;
    }
    public set type(value: Type) {
        this._type = value;
    }

    private _moveCount: number;
    public get moveCount(): number {
        return this._moveCount;
    }
    
    public incrementMoveCount(){
        this._moveCount++;
    }
}

export enum Type {
    KING = "K",
    QUEEN = "Q",
    ROOK = "R",
    BISHOP = "B",
    KNIGHT = "K",
    PAWN = "P"
}

