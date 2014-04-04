/*    By: Jeremy Suika
      Date: 4/3/2014
        Assignment: Goal2: Assignment Duel 2

    */

(function(){



    console.log("FIGHT!");    //title to signify start

   var warrior1 =["Spider-Man",20,100];   //array used to for name of superhero, damage, and total beginning health
   var warrior2=["Batman",20,100];          //array used to for name of superhero, damage, and total beginning health


    var round =0;                 //variable to show start of round

function fight(){


alert(warrior1[0]+":"+warrior1[2]+" *START* "+warrior2[0]+":"+warrior2[2]);   //alert to show the display of the Player and their health



    for (var i=0; i <10; i++){   //to change the number of rounds, not to go over 10, for the loop

        var minDamage1=warrior1[1] *.5;                             //to create a random number, to be deducted or subtracted
        var minDamage2=warrior2[1] *.5;
        var f1=Math.floor(Math.random()*(warrior1[1]-minDamage1)+minDamage1);
        var f2=Math.floor(Math.random()*(warrior2[1]-minDamage2)+minDamage2);

        warrior1[2]-=f1;    //this is how damage gets deducted for player 1
        warrior2[2]-=f2;    //this is how damage gets deducted for player 2

        console.log(warrior1[0]+":"+warrior1[2] +" "+warrior2[0]+":"+warrior2[2]);

        var result= winnerCheck();    //used to call the argument out of the function, and be used elsewhere
        console.log(result);

        if (result ==="no winner"){                 //to display the end of the rounds after each click of the the ALERT, also to state that there is still no winner
            round++;
            alert(warrior1[0]+":"+warrior1[2]+"  -Round "+round+ " Over-  "+ warrior2[0]+":"+warrior2[2]);
        }else{
            alert(result);
            break;

        }
    };


};

function winnerCheck(){


   var result="no winner";                              //function used to display the Else If statements, If both the
                                                        //     score are zero or below then, then 1st If statement is TRUE.
    if (warrior1[2]<=0 && warrior2[2]<=0){
    result="You Both are Dead";
    }else if(warrior1[2]<=0){                       //the Else If states if player 1 health is 0, then player 2 wins
    result=warrior2[0]+" Wins!"
    }else if(warrior2[2]<=0){                       //the Else If states if player 2 health is 0, then the player 1 wins
    result=warrior1[0]+" Wins!"
    };


    return result;
    console.log(result);
};



fight();





})();

