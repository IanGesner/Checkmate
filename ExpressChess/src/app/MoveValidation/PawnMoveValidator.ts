import { MoveValidator } from "./MoveValidator";
import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";
import { destroyPlatform } from "@angular/core";
import { Piece, Type } from "../POTSOs/Piece";

export class PawnMoveValidator extends MoveValidator {

    constructor(source: Tile, dest: Tile, ownedColor: Color, board: Tile[][]) {
        super(source, dest, ownedColor, board);
    }

    protected isCorrectMovePattern(): boolean {
        // let leftTile: Tile = this._currentBoard[this._source.coordinate]

        if (this._ownedColor === Color.BLACK) { // Validate a pawn move when this client owns black
            if (this._deltaY < 0) { // Ensure black pawn is moving down the board 
                if (this._deltaY === -1) {
                    if (this._deltaX === 0) // If pawn moves straight down one tile
                        return true;
                    else if (this._deltaY === -1 || this._deltaY === 1 && this._pieceCollidesWhite) // If pawn is capturing white piece on diagonal
                        return true;
                    // else if (this._source.coordinate.y === 4 && this._deltaX === 1 || this.) {
                    //     let leftTile: Tile = this._source.coordinate.x > 0 ? this._currentBoard[this._source.coordinate.x - 1][4] : null;
                    //     let rightTile: Tile = this._source.coordinate.x < 7 ? this._currentBoard[this._source.coordinate.x + 1][4] : null;
                    //     if (leftTile && leftTile.piece && leftTile.piece.type === Type.PAWN && leftTile.piece.moveCount === 1)
                    //}   
                    // Need to check for capture en passant
                }
                else if (this._deltaX === -2 && this._deltaY === 0 && this._piece.moveCount === 0) { //If piece moves two tiles down on first move
                    return true;
                }
            }
            return false;
        }

        else if (this._ownedColor === Color.WHITE) { // Validate a pawn move when this client owns white
            if (this._deltaX > 0) { // Ensure white pawn is moving up the board 
                if (this._deltaX === 1) {
                    if (this._deltaY === 0) // If pawn moves straight up one tile
                        return true;
                    else if (this._deltaY === -1 || this._deltaY === 1 && this._pieceCollidesBlack) // If pawn is capturing black piece on diagonal
                        return true;
                }
                else if (this._deltaX === 2 && this._deltaY === 0 && this._piece.moveCount === 0) { //If piece moves two tiles up on first move
                    return true;
                }
            }
            return false;
        }

    }

    protected isPathClear(): boolean {
        return true;
    }

    protected testCheckForPiece(): boolean {
        return true;
    }
}