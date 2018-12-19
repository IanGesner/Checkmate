import { MoveValidator } from "./MoveValidator";
import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";

export class PawnMoveValidator extends MoveValidator {

    isLegalMove(source: Tile, dest: Tile, ownedColor: Color) : boolean {
        if (source.piece && source.piece.color === ownedColor) {
            
        }
        return true;
    }
    

    doesNotCollideFriendly() : boolean {
        return true;
    }
}