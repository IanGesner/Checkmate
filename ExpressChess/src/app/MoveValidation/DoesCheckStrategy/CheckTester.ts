import { Tile } from "src/app/POTSOs/Tile";

export interface CheckTester {
    test(board: Tile[][], kingLoc: Tile, attackerLoc: Tile) : boolean;
}

export interface PawnCheckTester {
    test(board: Tile)
}