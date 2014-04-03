/*    By: Jeremy Suika
      Date: 4/3/2014
        Assignment: Goal1: Assignment Duel 1

    */

(function(){

    console.log("FIGHT!")

    var playerOneName="Spiderman";      //players names
    var playerTwoName="Batman";         //players names

    var playerOneDamage= 20;      //players damage
    var playerTwoDamage=20;       //players damage

    var playerOneHealth=100;       //players health
    var playerTwoHealth=100;       //players health

    var round =1;                 //variable to show section of time.

function fight(){


alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);



    for (var i=0; i <10; i++){

        var minDamage1=playerOneDamage *.5;
        var minDamage2=playerTwoDamage *.5;
        var f1=Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
        var f2=Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

        playerOneHealth-=f1;
        playerTwoHealth-=f2;

        console.log(playerOneName+":"+playerOneHealth +" "+playerTwoName+":"+playerTwoHealth);


    };


};

function winnerCheck(){
    //code will go here
};
console.log("Begins")


fight();





})();

