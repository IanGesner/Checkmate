import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";

export abstract class MoveValidator {
    abstract isLegalMove(source: Tile, dest: Tile, ownedColor: Color) : boolean;
    
    protected doesNotCollideFriendly() : boolean {
        return true;
    }
}