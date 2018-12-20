import { MoveValidator } from "./MoveValidator";
import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";

export class PawnMoveValidator extends MoveValidator {

    constructor(source: Tile, dest: Tile, ownedColor: Color, board: Tile[][]) {
        super(source, dest, ownedColor, board);
    }

    protected isCorrectMovePattern(): boolean {
        // A black pawn can only move to a lower rank and a white pawn can only move to a higher rank
        let moveDirection = this._dest.coordinate.x - this._source.coordinate.x < 0 ? 'down' : 'up';

        if (this._source.piece && this._source.piece.color === this._ownedColor) {
            if (this._ownedColor === Color.WHITE && moveDirection == 'up') {
                return true;
            }
            else if (this._ownedColor === Color.BLACK && moveDirection == 'down') {
                return true;
            }
        }
        else
            return false;
    }

    protected isPathClear(): boolean {
        return true;
    } 

    protected testCheckForPiece(): boolean {
        return true;
    }
}