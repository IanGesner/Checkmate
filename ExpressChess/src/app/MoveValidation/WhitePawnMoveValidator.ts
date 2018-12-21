import { PawnMoveValidator } from "./PawnMoveValidator";
import { Color } from "../POTSOs/Color";

export class WhitePawnMoveValidator extends PawnMoveValidator {
    protected isCorrectMovePattern(): boolean {
        // let leftTile: Tile = this._currentBoard[this._source.coordinate]
        console.log('wpv deltax ' + this._deltaX);
        console.log('wpv deltay ' + this._deltaY);
        console.log(' in wpv deltax');

        if (this._ownedColor === Color.WHITE) { // Validate a pawn move when this client owns white
            if (this._deltaY > 0) { // Ensure white pawn is moving up the board 
                if (this._deltaY === -1) {
                    if (this._deltaX === 0) // If pawn moves straight up one tile
                        return true;
                    else if (this._deltaY === -1 || this._deltaY === 1 && this._pieceCollidesBlack) // If pawn is capturing white piece on diagonal
                        return true;
                    // else if (this._source.coordinate.y === 4 && this._deltaX === 1 || this.) {
                    //     let leftTile: Tile = this._source.coordinate.x > 0 ? this._currentBoard[this._source.coordinate.x - 1][4] : null;
                    //     let rightTile: Tile = this._source.coordinate.x < 7 ? this._currentBoard[this._source.coordinate.x + 1][4] : null;
                    //     if (leftTile && leftTile.piece && leftTile.piece.type === Type.PAWN && leftTile.piece.moveCount === 1)
                    //}   
                    // Need to check for capture en passant
                }
                else if (this._deltaX === 2 && this._deltaY === 0 && this._piece.moveCount === 0) { //If piece moves two tiles down on first move
                    return true;
                }
            }
            console.log('failed move');
            return false;
        }
    }
}