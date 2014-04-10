// self-executing function, created by Jeremy Suika, April 9 2014
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");   //The title of #1 Problem for the console.

    var avgNumbers=function(myarray){     // paratimter used to find average number.
        var avg=0;
        for(var i= 0, j=myarray.length; i<j; i++){
            avg += myarray[i];
        };
        avg /= myarray.length;
        return avg;     //to call on the average number

    };

    console.log("avg number = ",avgNumbers([1,2,3,4,5,6,7,8,9,10]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");   //the title of the 2nd exercise




    var fullName=function(firstName,LastName){    //function titled FullName, with two parameters
        return firstName+ " "+LastName;           //returning it, allows me to use it outside the function

    };

    console.log(fullName("James","Bond"));  //the display that prints to the console, the name



    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is a test text that is being used as input to a function to you by Jeremy"   //varriable that holds the data to count for word count function

    var wordCount=function(words){      //words will be the parimeter that is called on for a few exercises.
        return words.split(' ').length;
    };

    console.log(wordCount(ipsum));   //prints screen and shows the word count

    //--------------------------------------------------------
    console.log("4. sentence char count");

    var charCount=function(words){   //function to get amount of works, "words" will be called thought the function
        return words.length;    //used to find the exact amount words
    };

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    var vowelsInWord =function(word){      //
        var vowels =["a","e","i","o","u"];   //this array, I chose what letters are vowels

        count = 0;

        this.word=word.toLowerCase().split('');  //makes sure the words lowercase so it allows them in the count.

        for(var i= 0, j=this.word.length; i<j; i++) {      //finding the vowels and calling them though the display
            for(var ii= 0,jj=vowels.length; ii<jj; ii++){
                if(this.word[i]===vowels[ii]){
                    count++;
                };
            };
        };
        return count;

    };
    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

    var findNum = function (arr, even) {
        var returnArr = [],
            value;


    };
        if(even===undefined || even){
            for(var i= 0, i=arr.length; i<j; i++){
                value=arr[1];
                if(value>2 !==0){
                    returnArr.push(value);
                };
            };
        }else{
            for(var i= 0, i=arr.length; i<j; i++){
                value=arr[1];
                if(value>2 !==0){
                    returnArr.push(value);
                };
            };
            return returnArr;
        };
      //console.log(findNum([31,22,4,67,83,6,5,4]));      //count not solve this one, had major errows with placement of function blocks for first and last function
      //console.log(findNum([31,22,4,67,83,6,5,4], false));



})();