import { Type, Piece } from "../POTSOs/Piece";
import { Color } from "../POTSOs/Color";
import { Tile } from "../POTSOs/Tile";
import { MoveValidatorFactory } from "../MoveValidation/MoveValidatorFactory";


export class GameService {

    constructor() {
        console.log('gameservice created');
        this.turnCount = 0;
        this.board = [
            [
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.ROOK), { x: 0, y: 0 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.KNIGHT), { x: 0, y: 1 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.BISHOP), { x: 0, y: 2 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.QUEEN), { x: 0, y: 3 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.KING), { x: 0, y: 4 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.BISHOP), { x: 0, y: 5 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.KNIGHT), { x: 0, y: 6 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.ROOK), { x: 0, y: 7 })],
            [
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 0 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 1 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 2 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 3 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 4 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 5 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 6 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { x: 1, y: 7 })],
            [
                new Tile(Color.WHITE, null, { x: 2, y: 0 }),
                new Tile(Color.BLACK, null, { x: 2, y: 1 }),
                new Tile(Color.WHITE, null, { x: 2, y: 2 }),
                new Tile(Color.BLACK, null, { x: 2, y: 3 }),
                new Tile(Color.WHITE, null, { x: 2, y: 4 }),
                new Tile(Color.BLACK, null, { x: 2, y: 5 }),
                new Tile(Color.WHITE, null, { x: 2, y: 6 }),
                new Tile(Color.BLACK, null, { x: 2, y: 7 }),],
            [
                new Tile(Color.BLACK, null, { x: 3, y: 0 }),
                new Tile(Color.WHITE, null, { x: 3, y: 1 }),
                new Tile(Color.BLACK, null, { x: 3, y: 2 }),
                new Tile(Color.WHITE, null, { x: 3, y: 3 }),
                new Tile(Color.BLACK, null, { x: 3, y: 4 }),
                new Tile(Color.WHITE, null, { x: 3, y: 5 }),
                new Tile(Color.BLACK, null, { x: 3, y: 6 }),
                new Tile(Color.WHITE, null, { x: 3, y: 7 }),],
            [
                new Tile(Color.WHITE, null, { x: 4, y: 0 }),
                new Tile(Color.BLACK, null, { x: 4, y: 1 }),
                new Tile(Color.WHITE, null, { x: 4, y: 2 }),
                new Tile(Color.BLACK, null, { x: 4, y: 3 }),
                new Tile(Color.WHITE, null, { x: 4, y: 4 }),
                new Tile(Color.BLACK, null, { x: 4, y: 5 }),
                new Tile(Color.WHITE, null, { x: 4, y: 6 }),
                new Tile(Color.BLACK, null, { x: 4, y: 7 }),],
            [
                new Tile(Color.BLACK, null, { x: 5, y: 0 }),
                new Tile(Color.WHITE, null, { x: 5, y: 1 }),
                new Tile(Color.BLACK, null, { x: 5, y: 2 }),
                new Tile(Color.WHITE, null, { x: 5, y: 3 }),
                new Tile(Color.BLACK, null, { x: 5, y: 4 }),
                new Tile(Color.WHITE, null, { x: 5, y: 5 }),
                new Tile(Color.BLACK, null, { x: 5, y: 6 }),
                new Tile(Color.WHITE, null, { x: 5, y: 7 }),],
            [
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 0 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 1 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 2 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 3 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 4 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 5 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 6 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { x: 6, y: 7 })],
            [
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.ROOK), { x: 7, y: 0 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.KNIGHT), { x: 7, y: 1 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.BISHOP), { x: 7, y: 2 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.QUEEN), { x: 7, y: 3 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.KING), { x: 7, y: 4 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.BISHOP), { x: 7, y: 5 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.KNIGHT), { x: 7, y: 6 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.ROOK), { x: 7, y: 7 })]
        ]
    }

    private _selectedTile: Tile = null;
    public get selectedTile(): Tile {
        return this._selectedTile;
    }
    public set selectedTile(value: Tile) {
        this._selectedTile = value;
    }

    private _ownedColor: Color = Color.WHITE;
    public set ownedColor(value: Color) {
        this._ownedColor = value;
    }
    public get ownedColor(): Color {
        return this._ownedColor;
    }

    private _turnCount: Number;
    public get turnCount(): Number {
        return this._turnCount;
    }
    public set turnCount(value: Number) {
        this._turnCount = value;
    }

    private _board: Tile[][];
    public get board(): Tile[][] {
        return this._board.map(function (arr) {
            return arr.slice();
        });
    }
    public set board(value: Tile[][]) {
        this._board = value;
    }

    public movePiece(dest: Tile): boolean {
        // The MoveValidatorFactory.create() method will return a MoveValidator for the type of piece in the argument.
        // It will return null if piece on the selected tile is
        //let validator = MoveValidatorFactory.create(this._selectedTile, dest, this._ownedColor, this.board); 

        // if (validator.isLegalMove()) {
        //     console.log('legal move');
        this._board[dest.coordinate.x][dest.coordinate.y].piece = this._selectedTile.piece;
        console.log('moving ' + this._selectedTile.coordinate.x + ', ' + this._selectedTile.coordinate.y + ' to ' + dest.coordinate.x + ', ' + dest.coordinate.y);
        this._selectedTile.piece = null;
        this._selectedTile = null;
        // }
        // else {
        //     this._selectedTile = null; 
        //     return false;
        // }
        return true;
    }
}