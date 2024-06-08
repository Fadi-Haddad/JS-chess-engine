import { FR2SQ, BRD_SQ_NUM, FILES, RANKS, SQUARES, FilesBrd, RanksBrd } from "./defs.js";

window.onload = function() {
    console.log("main int called");

    function InitFilesRanksBrd() {

        for (let index = 0; index < BRD_SQ_NUM; ++index) { // fills the board with OFFBOARD=100 value.
            FilesBrd[index] = SQUARES.OFFBOARD;
            RanksBrd[index] = SQUARES.OFFBOARD;
        }

        for (let rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {  // 
            for (let file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
                let sq = FR2SQ(file, rank);
                FilesBrd[sq] = file;
                RanksBrd[sq] = rank;
            }
        }
        // test 
        console.log("FilesBrd[0]:" + FilesBrd[0] + " RanksBrd[0]:" + RanksBrd[0]);
        console.log("FilesBrd[SQUARES.A1]:" + FilesBrd[SQUARES.A1] + " RanksBrd[SQUARES.A1]:" + RanksBrd[SQUARES.A1]);
        console.log("FilesBrd[SQUARES.E8]:" + FilesBrd[SQUARES.E8] + " RanksBrd[SQUARES.E8]:" + RanksBrd[SQUARES.E8]);
    }

    function main() {
        console.log("main is called");
        InitFilesRanksBrd();
    }

    main();
};
