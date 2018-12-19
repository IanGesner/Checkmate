import { Piece, Type } from "../POTSOs/Piece";
import { MoveValidator } from "./MoveValidator";
import { TYPED_NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { PawnMoveValidator } from "./PawnMoveValidator";

export class MoveValidatorFactory {
    static create(piece: Piece) : MoveValidator {
        switch (piece.type) {
            case Type.PAWN: {
                return new PawnMoveValidator();
            }
        }
    }
}