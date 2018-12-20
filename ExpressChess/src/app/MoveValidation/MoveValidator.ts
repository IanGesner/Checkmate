import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";
import { Piece } from "../POTSOs/Piece";

export abstract class MoveValidator {
    constructor(source: Tile, dest: Tile, ownedColor: Color,  board: Tile[][]) {
        this._piece = source.piece;
        this._source = source;
        this._dest = dest;
        this._ownedColor = ownedColor;
        this._proposedBoard = board; // The proposed new board, potentially not valid
        this._currentBoard = board;

        dest.piece = source.piece;
        source.piece = null;
    }

    protected _currentBoard: Tile[][];
    protected _proposedBoard: Tile[][];
    protected _ownedColor: Color;
    protected _dest: Tile;
    protected _source: Tile;
    protected _piece: Piece;
    protected _inCheck: boolean;


    protected abstract isCorrectMovePattern(): boolean;
    protected abstract isPathClear(): boolean;
    protected abstract testCheckForPiece(myKingLoc: Tile, source: Tile): boolean;

    public isLegalMove(): boolean {
        return this.isNotFriendlyCollision();
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