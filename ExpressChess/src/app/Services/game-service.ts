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
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.ROOK), { rank: 0, file: 0 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.KNIGHT), { rank: 0, file: 1 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.BISHOP), { rank: 0, file: 2 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.QUEEN), { rank: 0, file: 3 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.KING), { rank: 0, file: 4 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.BISHOP), { rank: 0, file: 5 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.KNIGHT), { rank: 0, file: 6 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.ROOK), { rank: 0, file: 7 })],
            [
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 0 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 1 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 2 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 3 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 4 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 5 }),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 6 }),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), { rank: 1, file: 7 })],
            [
                new Tile(Color.WHITE, null, { rank: 2, file: 0 }),
                new Tile(Color.BLACK, null, { rank: 2, file: 1 }),
                new Tile(Color.WHITE, null, { rank: 2, file: 2 }),
                new Tile(Color.BLACK, null, { rank: 2, file: 3 }),
                new Tile(Color.WHITE, null, { rank: 2, file: 4 }),
                new Tile(Color.BLACK, null, { rank: 2, file: 5 }),
                new Tile(Color.WHITE, null, { rank: 2, file: 6 }),
                new Tile(Color.BLACK, null, { rank: 2, file: 7 }),],
            [
                new Tile(Color.BLACK, null, { rank: 3, file: 0 }),
                new Tile(Color.WHITE, null, { rank: 3, file: 1 }),
                new Tile(Color.BLACK, null, { rank: 3, file: 2 }),
                new Tile(Color.WHITE, null, { rank: 3, file: 3 }),
                new Tile(Color.BLACK, null, { rank: 3, file: 4 }),
                new Tile(Color.WHITE, null, { rank: 3, file: 5 }),
                new Tile(Color.BLACK, null, { rank: 3, file: 6 }),
                new Tile(Color.WHITE, null, { rank: 3, file: 7 }),],
            [
                new Tile(Color.WHITE, null, { rank: 4, file: 0 }),
                new Tile(Color.BLACK, null, { rank: 4, file: 1 }),
                new Tile(Color.WHITE, null, { rank: 4, file: 2 }),
                new Tile(Color.BLACK, null, { rank: 4, file: 3 }),
                new Tile(Color.WHITE, null, { rank: 4, file: 4 }),
                new Tile(Color.BLACK, null, { rank: 4, file: 5 }),
                new Tile(Color.WHITE, null, { rank: 4, file: 6 }),
                new Tile(Color.BLACK, null, { rank: 4, file: 7 }),],
            [
                new Tile(Color.BLACK, null, { rank: 5, file: 0 }),
                new Tile(Color.WHITE, null, { rank: 5, file: 1 }),
                new Tile(Color.BLACK, null, { rank: 5, file: 2 }),
                new Tile(Color.WHITE, null, { rank: 5, file: 3 }),
                new Tile(Color.BLACK, null, { rank: 5, file: 4 }),
                new Tile(Color.WHITE, null, { rank: 5, file: 5 }),
                new Tile(Color.BLACK, null, { rank: 5, file: 6 }),
                new Tile(Color.WHITE, null, { rank: 5, file: 7 }),],
            [
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 0 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 1 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 2 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 3 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 4 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 5 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 6 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), { rank: 6, file: 7 })],
            [
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.ROOK), { rank: 7, file: 0 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.KNIGHT), { rank: 7, file: 1 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.BISHOP), { rank: 7, file: 2 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.QUEEN), { rank: 7, file: 3 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.KING), { rank: 7, file: 4 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.BISHOP), { rank: 7, file: 5 }),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.KNIGHT), { rank: 7, file: 6 }),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.ROOK), { rank: 7, file: 7 })]
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
        let returnVal = this._board.map(function (arr) {
            return arr.slice();
        }).reverse();

        console.log(returnVal);

        return returnVal;
    }
    public set board(value: Tile[][]) {
        this._board = value;
    }

    public movePiece(dest: Tile): boolean {
        // The MoveValidatorFactory.create() method will return a MoveValidator for the type of piece in the argument.
        // It will return null if piece on the selected tile is
        let validator = MoveValidatorFactory.create(this._selectedTile, dest, this._ownedColor, this.board);

        if (validator.isLegalMove()) {
            this._board[dest.coordinate.rank][dest.coordinate.file].piece = this._selectedTile.piece;
            console.log('moving ' + this._selectedTile.coordinate.file + ', ' + this._selectedTile.coordinate.rank + ' to ' + dest.coordinate.file + ', ' + dest.coordinate.rank);
            this._selectedTile.piece = null;
            this._selectedTile = null;

            //this._ownedColor = this._ownedColor == Color.WHITE ? Color.BLACK : Color.WHITE;
        }
        else {
            this._selectedTile = null;
            return false;
        }
        return true;
    }
}