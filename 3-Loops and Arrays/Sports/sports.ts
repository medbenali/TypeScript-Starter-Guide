let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

//console.log(sportsOne);

//console.log("Sports is "+ sportsOne);

// Traditional for loop


for (let i=0; i < sportsOne.length; i++)
{
    console.log(sportsOne[i]);
}



// Let's use the simplifed for loop


for (let tempSport of sportsOne)
{
    console.log(tempSport);
}


for (let tempSport of sportsOne)
{
    if(tempSport == "Cricket")
    {
        console.log(tempSport + " << My Favourite!");
    }

    else
    {
        console.log(tempSport); 
    }
}
 