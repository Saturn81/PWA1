/**
 * Created by Jeremy A. Suika on 4/16/14.
 * week 3 assignment, Duel 3
 */


(function (){

    console.log("  ----FIGHT----   ");  //Goes to the console to display the Title

                    //variables for the dom. elements used from the HTML
    var warrior1_txt =document.getElementById("kabal");     //displays player 1 or index 0
    var warrior2_txt =document.getElementById("kratos");    //displays player 2 or index 1
    var round_txt=document.getElementById("round");         //used for the round display
    var button= document.getElementById("fight_btn");       //for text above buttom
    var tester= document.getElementById("kabal2")         //testing and creating new dom piece



    //console.log()

    button.addEventListener("click",fight, false);     //used to click and begin exercise

    var warriors = [
        {
            name:"SpiderMan",damage:22,health:100       //the 3 data needed, player health, damage, and health.

        },
        {
            name:"Bane",damage:22,health:100        //the 3 data needed, player health, damage, and health. In an array


        }];

    var round=1;   //for the display of the starting round


    round_txt.innerHTML="Click Fight to Start";       //to post the DOM HTML on the HTML, players name and health
    warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;  //players name and health
    warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;  //players name and health







    function fight(){  //create function for the damage in the fight

        warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
        warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;
                                                                                        //creates damage
        var f1=Math.floor(Math.random() * warriors[0].damage+warriors[0].damage *.5);
        var f2=Math.floor(Math.random() * warriors[1].damage+warriors[1].damage *.5);

            //inputs the damage
        warriors[0].health -= f1;
        warriors[1].health -= f2;

        console.log(warriors[0].health, warriors[1].health);    //shows results of each round




        var result =winnerCheck();     //seeing result of fight
        console.log(result);


        round_txt.innerHTML=    "ROUND " + round + " COMPLETE";    //display on html of the rounds
        round++;



        if (result === "no winner")   //if, and else staement to get results of fight, and continue the fight.
        {
            warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
            warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;

        }else{
            warrior1_txt.innerHTML=result;
            warrior2_txt.innerHTML="";


                //stops the click button for continuing
             button.removeEventListener("click",fight,false);

            document.querySelector('.buttonblue').innerHTML="GAME OVER!";  //display the end of the fight.

        }




    }

                //function to display the winner in console and HTML
    function winnerCheck(){
        var result = "no winner";                                   //else if statements chose the damage inflicted each round and deternine thhe result. 
        if (warriors[0].health<=0 && warriors[1].health <=0)
        {
            result="You Both Are Dead";
        } else if(warriors[0].health <= 0){
            result=warriors[1].name + " Wins Fight!"

        } else if(warriors[1].health <= 0)
        {
            result=warriors[0].name + " Wins Fight!"

        }
        return result;



    }

    })();











