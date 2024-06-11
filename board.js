import { COLOURS } from "./defs";

let GameBoard = {}

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side= COLOURS.WHITE;
GameBoard.enPas= 0;
GameBoard.fiftyMove = 0;  // if fifty moves were made by either sides with no captures or pawn movement, the game is drawn

GameBoard.ply = 0; // a ply is half of a move (1move = 2 plies). ply here means depth of the search tree.
GameBoard.hisPly = 0;  // history ply is the number of moves/2

GameBoard.castlePerm= 0;  //decimal number(0-15) represents the permitability of each side to castle on a side
             // for ex: 1101: white can castle on kings side, can't castle on queen's side
            // black can castle on kings side, can castle on queen's side.
            // to fine out if white can castle on kings side, we do a bitwise & between castlePerm and WKCA value in CASTLEBIT object

GameBoard.material = new Array(2); // White, Black material of pieces