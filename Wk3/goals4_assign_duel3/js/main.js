/**
 * Created by Jeremy A. Suika on 4/16/14.
 * week 3 assignment, Duel 3
 */


(function (){

    console.log("  ----FIGHT----   ");


    var warrior1_txt =document.getElementById("kabal");
    var warrior2_txt =document.getElementById("kratos");
    var round_txt=document.getElementById("round");
    var button= document.getElementById("fight_btn");

    console.log()

    button.addEventListener("click",fight, false);

    var warriors = [
        {
            name:"SpiderMan",damage:22,health:100

        },
        {
            name:"Bane",damage:22,health:100


        }];

    var round=1;


    round_txt.innerHTML="Click Fight to Start";
    warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
    warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;


    function oneClick(){

        fight()
   }


    function fight(){

        warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
        warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;

        var f1=Math.floor(Math.random() * warriors[0].damage+warriors[0].damage *.5);
        var f2=Math.floor(Math.random() * warriors[1].damage+warriors[1].damage *.5);


        warriors[0].health -= f1;
        warriors[1].health -= f2;

        console.log(warriors[0].health, warriors[1].health);




        var result =winnerCheck();
        console.log(result);


        round_txt.innerHTML= "ROUND" + round + " COMPLETE";
        round++;



        if (result === "no winner")
        {
            warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
            warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;

        }else{
            warrior1_txt.innerHTML=result;
            warrior2_txt.innerHTML="";


           // buton.removeEventListener("DONE")
             button.removeEventListener("click",fight,false);

            document.querySelector('.buttonblue').innerHTML="DONE!";

        }




    }


    function winnerCheck(){
        var result = "no winner";
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











