import { Type, Piece } from "../POTSOs/Piece";
import { Color } from "../POTSOs/Color";
import { Tile } from "../POTSOs/Tile";

export class GameService {

    constructor() {
        this.turnCount = 0;
        this.board = [
            [
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.ROOK), {rank: 8, file: 1}),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.KNIGHT), {rank: 8, file: 2}),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.BISHOP), {rank: 8, file: 3}),           
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.QUEEN), {rank: 8, file: 4}),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.KING), {rank: 8, file: 5}),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.BISHOP), {rank: 8, file: 6}),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.KNIGHT), {rank: 8, file: 7}),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.ROOK), {rank: 8, file: 8})],
            [
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 1}),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 2}),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 3}),
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 4}),
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 5}), 
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 6}), 
                new Tile(Color.BLACK, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 7}), 
                new Tile(Color.WHITE, new Piece(Color.BLACK, Type.PAWN), {rank: 7, file: 8})],
            [
                new Tile(Color.WHITE, null, {rank: 6, file: 1}), 
                new Tile(Color.BLACK, null, {rank: 6, file: 2}),  
                new Tile(Color.WHITE, null, {rank: 6, file: 3}), 
                new Tile(Color.BLACK, null, {rank: 6, file: 4}), 
                new Tile(Color.WHITE, null, {rank: 6, file: 5}), 
                new Tile(Color.BLACK, null, {rank: 6, file: 6}), 
                new Tile(Color.WHITE, null, {rank: 6, file: 7}), 
                new Tile(Color.BLACK, null, {rank: 6, file: 8}),],
            [
                new Tile(Color.BLACK, null, {rank: 5, file: 1}), 
                new Tile(Color.WHITE, null, {rank: 5, file: 2}),  
                new Tile(Color.BLACK, null, {rank: 5, file: 3}), 
                new Tile(Color.WHITE, null, {rank: 5, file: 4}), 
                new Tile(Color.BLACK, null, {rank: 5, file: 5}), 
                new Tile(Color.WHITE, null, {rank: 5, file: 6}), 
                new Tile(Color.BLACK, null, {rank: 5, file: 7}), 
                new Tile(Color.WHITE, null, {rank: 5, file: 8}),],
            [
                new Tile(Color.WHITE, null, {rank: 4, file: 1}), 
                new Tile(Color.BLACK, null, {rank: 4, file: 2}),  
                new Tile(Color.WHITE, null, {rank: 4, file: 3}), 
                new Tile(Color.BLACK, null, {rank: 4, file: 4}), 
                new Tile(Color.WHITE, null, {rank: 4, file: 5}), 
                new Tile(Color.BLACK, null, {rank: 4, file: 6}), 
                new Tile(Color.WHITE, null, {rank: 4, file: 7}), 
                new Tile(Color.BLACK, null, {rank: 4, file: 8}),],
            [
                new Tile(Color.BLACK, null, {rank: 3, file: 1}), 
                new Tile(Color.WHITE, null, {rank: 3, file: 2}),  
                new Tile(Color.BLACK, null, {rank: 3, file: 3}), 
                new Tile(Color.WHITE, null, {rank: 3, file: 4}), 
                new Tile(Color.BLACK, null, {rank: 3, file: 5}), 
                new Tile(Color.WHITE, null, {rank: 3, file: 6}), 
                new Tile(Color.BLACK, null, {rank: 3, file: 7}), 
                new Tile(Color.WHITE, null, {rank: 3, file: 8}),],
            [
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 1}),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 2}),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 3}),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 4}),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 5}), 
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 6}), 
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 7}), 
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.PAWN), {rank: 2, file: 8})],
            [
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.ROOK), {rank: 1, file: 1}),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.KNIGHT), {rank: 1, file: 2}),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.BISHOP), {rank: 1, file: 3}),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.QUEEN), {rank: 1, file: 4}),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.KING), {rank: 1, file: 5}),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.BISHOP), {rank: 1, file: 6}),
                new Tile(Color.BLACK, new Piece(Color.WHITE, Type.KNIGHT), {rank: 1, file: 7}),
                new Tile(Color.WHITE, new Piece(Color.WHITE, Type.ROOK), {rank: 1, file: 8})],
        ]
    }

    private _ownedColor: Color = Color.WHITE;
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
        return this._board.map(function(arr) {
            return arr.slice();
        });
    }
    public set board(value: Tile[][]) {
        this._board = value;
    }
}