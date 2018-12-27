import { MoveValidator } from "./MoveValidator";
import { Tile } from "../POTSOs/Tile";
import { Color } from "../POTSOs/Color";
import { destroyPlatform } from "@angular/core";
import { Piece, Type } from "../POTSOs/Piece";

export abstract class PawnMoveValidator extends MoveValidator {

    constructor(source: Tile, dest: Tile, ownedColor: Color, board: Tile[][]) {
        super(source, dest, ownedColor, board);
    }

}