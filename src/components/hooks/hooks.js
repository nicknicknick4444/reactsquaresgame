import Recat, {useState, useEffect} from "react";

export function randomise() {
    const game_choices = [
    [
        ["1","2","Blank","4","5","3","7","8","9"], 
        ["N", "N", "Y", "N", "Y", "N", "N", "N", "Y"],
        ["1", "2", "3", "4", "5", "", "7", "8", "9"],
        "1,2,3,4,5,Blank,7,8,9"],
    // [["9", "8", "7", "3", "5", "4", "Blank", "2", "1"], ["Y", "N", "N", "N", "Y", "N", "Y", "N", "N"]],
    // [["8", "9", "5", "Blank", "6", "4", "3", "1", "7"], ["Y", "N", "N", "Y", "N", "N", "Y", "N", "N"]],
    ];
    
    var the_choice = Math.floor(Math.random() * 1);

    return game_choices[the_choice];
};