var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
//console.log(sportsOne);
//console.log("Sports is "+ sportsOne);
// Traditional for loop
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// Let's use the simplifed for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favourite!");
    }
    else {
        console.log(tempSport);
    }
}
