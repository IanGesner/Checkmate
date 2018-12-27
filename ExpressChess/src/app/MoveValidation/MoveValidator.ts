import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";
import { Piece } from "../POTSOs/Piece";

export abstract class MoveValidator {
    constructor(source: Tile, dest: Tile, ownedColor: Color, board: Tile[][]) {
        this._piece = source.piece;
        this._source = source;
        this._dest = dest;
        this._ownedColor = ownedColor;
        this._proposedBoard = board; // The proposed new board, potentially not valid
        this._currentBoard = board;

        if (this._dest) {
            this._pieceCollidesWhite = this._dest.piece ? this._dest.piece.color === Color.WHITE : false;
            this._pieceCollidesBlack = this._dest.piece ? this._dest.piece.color === Color.BLACK : false;
        }
        if (this._source) {
            this._deltaX = this._source.coordinate.file - this._dest.coordinate.file; // deltaX will be positive when moving up the board and negative when moving down the board
            this._deltaY = this._source.coordinate.rank - this._dest.coordinate.rank; // deltaY will be positive when moving left and negative when moving right
        }

        // dest.piece = source.piece;
        // source.piece = null;
    }

    protected _currentBoard: Tile[][];
    protected _proposedBoard: Tile[][];
    protected _ownedColor: Color;
    protected _dest: Tile;
    protected _source: Tile;
    protected _piece: Piece;
    protected _inCheck: boolean;
    // If black, on first move, and moving tiles forward, return true
    protected _pieceCollidesWhite;
    protected _pieceCollidesBlack;

    protected _deltaX;
    protected _deltaY;


    protected abstract isCorrectMovePattern(): boolean;
    protected abstract isPathClear(): boolean;
    protected abstract testCheckForPiece(myKingLoc: Tile, source: Tile): boolean;

    public isLegalMove(): boolean {
        return this.isNotFriendlyCollision() && this.isCorrectMovePattern();
    }

    private isNotFriendlyCollision(): boolean {
        if (this._dest.piece.color === this._ownedColor)
            return true;
        else
            return false;
    }

    private static inCheck(board: Tile[][]): boolean {
        return true;
    }

    private doesResolveCheck(): boolean {
        return true;
    }
}