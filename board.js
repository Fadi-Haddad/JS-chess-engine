import { COLOURS } from "./defs";

let GameBoard = {}

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side= COLOURS.WHITE;
GameBoard.fiftyMove = 0;  // if fifty moves were made by either sides with no captures or pawn movement, the game is drawn