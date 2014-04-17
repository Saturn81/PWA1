/**
 * Created by Jeremy A. Suika on 4/16/14.
 * week 3 assignment, Duel 3
 */


(function(){

    console.log("  ----FIGHT----   ");


    var warrior1_txt =document.querySelector("#kratos").querySelector("p")
    var warrior2_txt =document.querySelector("#kabal").querySelector("p")
    var round_txt=document.querySelector("h4");
    var button= document.getElementById("fight_btn");


   // button.addEventListener("Click",Fight, false);

    var warriors = [
        {
            name:"Spiderman",damage:25,health:100

        },
        {
            name:"Bane",damage:20,health:100


        }];
    var round=1;


    round_txt.innerHTML="Click Here to Start Fight";
    warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
    warrior1_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;

   function fightOn(){

       warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
       warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;

       var f1=Math.floor(Math.random() * warriors[0].damage+warriors[0].damage *.50);
       var f2=Math.floor(Math.random() * warriors[1].damage+warriors[1].damage *.50);


       warriors[0].health -= f1;
       warriors[1].health -= f2;

       console.log(warriors[0].health, warriors[1].health);




       var end =whoWon();
       console.log(end);


       round_txt.innerHTML= "Round" + round + "Complete";
       round++;

       if (end === "no winner");
       {
           warrior1_txt.innerHTML=warriors[0].name + ":" + warriors[0].health;
           warrior2_txt.innerHTML=warriors[1].name + ":" + warriors[1].health;

       }else{
           warrior1_txt.innerHTML=end;
           warrior2_txt.innerHTML="";

           document.querySelector('.buttonblue').innerHTML="Done!";

       }




   }







    console.log(warriors[0].health);


















})();