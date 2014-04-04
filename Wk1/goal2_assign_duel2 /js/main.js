/*    By: Jeremy Suika
      Date: 4/3/2014
        Assignment: Goal2: Assignment Duel 2

    */

(function(){


    var warrior1 =["Spiderman",25,100];
    var warrior2=["Batman",20,100];

console.log(warrior1[0]);

    console.log("FIGHT!");    //title to signify start

    var playerOneName="Spiderman";      //players names
    var playerTwoName="Batman";         //players names

   var playerOneDamage= 20;      //players damage
   var playerTwoDamage=20;       //players damage

   var playerOneHealth=100;       //players health
   var playerTwoHealth=100;       //players health

    var round =0;                 //variable to show start of round

function fight(){


alert(warrior1[0]+":"+warrior1[2]+" *START* "+warrior2[0]+":"+warrior2[2]);   //alert to show the display of the Player and their health



    for (var i=0; i <10; i++){   //to change the number of rounds

        var minDamage1=playerOneDamage *.5;                             //to create a random number, to be deducted or subtracted
        var minDamage2=playerTwoDamage *.5;
        var f1=Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
        var f2=Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

        playerOneHealth-=f1;    //this is how damage gets decucted for player 1
        playerTwoHealth-=f2;    //this is how damage gets decucted for player 2

        console.log(playerOneName+":"+playerOneHealth +" "+playerTwoName+":"+playerTwoHealth);

        var result= winnerCheck();    //used to call the argument out of the function, and be used elsewhere
        console.log(result);

        if (result ==="no winner"){                 //to display the end of the rounds after each click of the the ALERT, also to state that there is still no winner
            round++;
            alert(playerOneName+":"+playerOneHealth+"  -Round "+round+ " Over-  "+ playerTwoName+":"+playerTwoHealth);
        }else{
            alert(result);
            break;

        }
    };


};

function winnerCheck(){


   var result="no winner";                              //function used to display the Else If statements, If both the
                                                        //     score are zero or below then, then 1st If statement is TRUE.
    if (playerOneHealth<=0 && playerTwoHealth<=0){
    result="You Both are Dead";
    }else if(playerOneHealth<=0){                       //the Else If states if player 1 health is 0, then player 2 wins
    result=playerTwoName+" Wins!"
    }else if(playerTwoHealth<=0){                       //the Else If states if player 2 health is 0, then the player 1 wins
    result=playerOneName+" Wins!"
    };


    return result;
    console.log(result);
};



fight();





})();

