

    //FCC Algorithms round 1

    // function reverseString(str){
    //     var split = str.split("");
    //     var reverse = split.reverse();
    //     var join = reverse.join("");
    //     return join;
    // }

    // reverseString("Hello");
    // //gives "olleH"

    // function factorialize(num){
    //     //gives the factorial
    //     if (num===0){
    //         return 1;
    //     }
    //     for (var i=num-1; i>0; i--){
    //         var start *=i;
    //     }
    //     return start;
    // }

    // function palindrome(str) {
    //     var lowercase = str.toLowerCase();
    //     emptyArray=[];
       
    //     for (var i=0; i<lowercase.length; i++){
    //         if (lowercase[i]==1||lowercase[i]===2||lowercase[i]===3||lowercase[i]===4||lowercase[i]===5||lowercase[i]===6||lowercase[i]===7||lowercase[i]===8||lowercase[i]===9||lowercase[i]===0){
              
    //             emptyArray.push(lowercase[i]);
    //         }
    //         else if (lowercase.charCodeAt(i)<123&& lowercase.charCodeAt(i)>96){
    //             emptyArray.push(lowercase[i]);
    //         }
    //     }
        
    //     reverseArray = [];
    //     for (var x = emptyArray.length-1; x>=0; x--){
    //         reverseArray.push(emptyArray[x]);
    //     }
    //     console.log(reverseArray);
    //     for (var j=0; j<emptyArray.length; j++){
    //         if (reverseArray[j]!==emptyArray[j]){
    //             console.log(false);
    //             return false;
    //         }
    //     }
        
    //     return true;
    //     }

        //FCC Beginner Solution

        // function palindrome(str) {
        //     return str.replace(/[\W_]/g, '').toLowerCase() ===
        //      str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
        // }

        // FCC Advanced Solution
            //advantage is that it doesn't have to parse through a very large string to get the answer

    //     function palindrome(str) {
    //         //assign a front and a back pointer
    //         let front = 0;
    //         let back = str.length - 1;

    //         //back and front pointers won't always meet in the middle, so use (back > front)
    //         while (back > front) {
    //             //increments front pointer if current character doesn't meet criteria
    //             while ( str[front].match(/[\W_]/) ) {
    //             front++;
    //             continue;
    //             }
    //             //decrements back pointer if current character doesn't meet criteria
    //             while ( str[back].match(/[\W_]/) ) {
    //             back--;
    //             continue;
    //             }
    //             //finally does the comparison on the current character
    //             if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    //             front++;
    //             back--;
    //         }
            
    //         //if the whole string has been compared without returning false, it's a palindrome!
    //         return true;

    //         }

    // palindrome("never odd or even");

    // function findLongestWord(str){
    //     var words = str.split(" ");
    //     var longest = 0;
    //     for (var i = 0; i<words.length; i++){
    //         if (words[i].length>longest){
    //             longest=words[i].length;
    //         }
    //     }
    //     console.log(longest);
    //     return longest;
    // }

    // findLongestWord("The quick brown fox jumped over the lazy dog");

    // function titleCase(str) {
            //splits string into one word arrays
    //     var upper = str.split(" ");
    //     for (var i=0; i<upper.length; i++){
            //replaces each word/string with an uppercase character plus a sliced in rest of the word converted to lowercase
    //         upper[i]=upper[i].charAt(0).toUpperCase() + upper[i].slice(1).toLowerCase();
    //     }
            //rejoins the string
    //     console.log(upper.join(" "));
    // }

    // titleCase("I'm a little tea pot");

    // function largestOfFour(arr){
    //     //returns an new array with the largest values in each sub array
    //     var subArray=[];
    //     for (var i=0; i<arr.length; i++){
    //         var largest=null;
    //         for (var j=0; j<arr[i].length; j++){
    //             if (arr[i][j]>largest){
    //                 largest= arr[i][j];
    //             }
    //         }
    //         subArray.push(largest);
    //     }
    //     console.log(subArray);
    // }
    // largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

    // function confirmEnding(str, target) {
    //     // Checks that end of phrase is equal to target
    //     var length= 0
        
    //     while(length<target.length){
    //         var i=0;
    //         if (target[target.length-1-length]===str[str.length-1-length]){
    //             length++;
    //             continue;
    //         }
    //         else {console.log(false); return false;}
    //     }
    //     console.log(true);
    //     return true;
    // }
    // confirmEnding("Bastian", "yan");

    // function repeatStringNumTimes(str, num) {
    //     // repeat after me
    //     var count = 0
    //     var newStr =""
    //     while(count<num){
    //         newStr+=str;
    //         count++;
    //     }
    //     return newStr;
    // }

    // repeatStringNumTimes("abc", 3);

    // function truncateString(str, limit){
    //     var arr = [];
    //     if (str.length-1<limit){
    //         return str;
    //     }
    //     else if(limit<=3){
    //         for (var j =0; j<limit; j++){
    //             arr.push(str[j]);
    //         }
    //         var shortStr = arr.join("")+"...";
    //         return shortStr;
    //     }
    //     else {
    //         for (var i=0; i<limit-3; i++){
    //             arr.push(str[i]);
    //         }
    //         var newStr = arr.join("")+"...";
    //         return newStr;
    //     }
    // }

    // function ternTruncate(str, num){
    //     //solution is much nicer and uses a ternary. From FCC advanced solution
    //     if (str.length>num){
    //         return str.slice(0, num>3 ? num-3 : num)+ "...";
    //     }
    //     return str;

    // }
    // ternTruncate("A-tisket a-tasket A green and yellow basket", 11);

//    function chunkyMonkey(arr, size){
//         var newArr=[];
//         var count = (arr.length%size===0) ? count=arr.length/size : count=Math.floor(arr.length/size) +1
//         var i=0;
//         var j=0;
//         while (count>0){ 
//             newArr[i]=arr.slice(j, j+size)
//             i++;
//             j+=size;
//             count--;
//         }
//         console.log(newArr)
//         return newArr; 
        
//     }
    

//     chunkyMonkey(["a","b","c","d","e"], 2)

    // function slasherFlix(arr,howMany){
    //     //takes an array and cuts off the head (0 index) as many times as necessary. returns array
    //     while (howMany>0){
    //         arr.splice(0,1);
    //         howMany--;
    //     }
    //     return arr;

    //     //or
    //     //return arr.slice(howMany);
    // }
    // function mutations(arr){
    //     //checks that the characters of string one can make up the characters in string 2
    //     arr[1] = arr[1].toLowerCase();
    //     arr[0] = arr[0].toLowerCase();
    //     for (var i = 0; i<arr[1].length; i++){
    //         if (arr[0].indexOf(arr[1][i])===-1){
    //             console.log(false)
    //         }
            
    //     }
    //     console.log(true);


    // }
    // mutations(["Mary", "Aprmy"]);

    // function falsy(arr){
    //     //returns an array with no falsy values (NaN, false, 0, null, undefined, "")
    //     var newArr=[];
    //     for (var i=0; i<arr.length; i++){
    //         if (arr[i]){
    //             newArr.push(arr[i]);
    //         }
    //     }
    //     console.log(newArr)
    //     return newArr;

    //     //FCC Soluction
    //     //return arr.filter(Boolean);
    // }
    // falsy([1, null, NaN, 2, undefined]);

    // function destroyer(arr){
    //     naughty=[];
    //     for (var i = 1; i<arguments.length; i++){
    //         naughty.push(arr[i]);
    //     }
    //     for (var j=0; j<arr.length; j++){
    //         for (var k=0; k<naughty.length; k++){
    //             if (arr[j]===naughty[k]){
    //                 delete arr[j];
    //             }
    //         }
    //     }
    //     console.log(arr.filter(Boolean));
    // }

    // destroyer([1,2,3], 2, 3)

    // console.log([5, 3, 20, 3].sort());

    // function whereDoIBelong(arr, val){
    //     //returns an index of where the value would go in a sorted array. Array can be unsorted to start
    //     arr.sort(function(a,b){return a-b});
    //     console.log(arr)
    //     for (var i=0; i<arr.length; i++){
    //         if (arr[i]>=val){
    //             console.log(i);
    //             return;
    //         }
    //     }
    //     console.log(arr.length)
    //     return;
    // }

    // whereDoIBelong([5, 3, 20, 3], 5);

    // function rot13(str){
    //     //all letters will be in caps and need to be shifted by 13 letters for the true answer
    //     var decoder = [];
    //     for (var i=0;i<str.length;i++){
    //         decoder.push(str[i].charCodeAt())
    //         if (decoder[i]>90||decoder[i]<65){
    //             decoder[i]=String.fromCharCode(decoder[i])
    //             continue;
    //         }
    //         else if (decoder[i]+13>90){
    //             decoder[i]= (decoder[i]+13)-91+(65)
    //             decoder[i]=String.fromCharCode(decoder[i])
    //         }
    //         else {
    //             decoder[i]+=13;
    //             decoder[i]=String.fromCharCode(decoder[i]);    
    //         }
    //     }
        
    //     return decoder.join("");
    // }
    // rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

        // timeSense(timeNow, timePast)

        // -given two parameters (the current time and a time in the past) return the difference in a human readable form:

        // like: 1 yr, 6 months, 12 days, 4 hrs ago

        // only display the highest unit required...so if its below a year
        // 6 months, 12 days, 4 hrs
        // as for inputs, timePast will be a string formated as such 'Fri Sep 21 2018 10:31:45 GMT-0700 (Pacific Daylight Time)'
        // timeNow can be setup how you like

// function timeSense(timeNow, timePast) {
//     // Convert to standardized dates
//     let now = new Date(timeNow);
//     let then = new Date(timePast);

//     // Get difference between the dates, in seconds (from milliseconds)
//     let diff = Math.abs(now-then) / 1000;
    
//     // Break in to years, days, hours, minutes seconds 
//     const years = Math.floor(diff/31536000);
//     const days = Math.floor(diff / 86400) % 365;
//     const hours = Math.floor(diff / 3600) % 24;
//     const minutes = Math.floor(diff / 60) % 60;
//     const seconds = Math.floor(diff % 60);

//     // Constructs correct return statement
//     let elapsedTime = "";
//     if (years === 1) {elapsedTime += years + ' year ';}
//     else if (years > 1) {elapsedTime += years + ' years ';}
//     if (days === 1) {elapsedTime += days + ' day ';}
//     else if (days > 1) {elapsedTime += days + ' days ';}
//     if (hours === 1) {elapsedTime += hours + ' hour ';}
//     else if (hours > 1) {elapsedTime += hours + ' hours ';}
//     if (minutes === 1) {elapsedTime += minutes + ' minute ';}
//     else if (minutes > 1) {elapsedTime += minutes + ' minutes ';}
//     if (seconds === 1) {elapsedTime += seconds + ' second ';}
//     else if (seconds > 1) {elapsedTime += seconds + ' seconds ';}
//     elapsedTime += 'ago';

//     return elapsedTime;
// }

// console.log(timeSense('Fri Sep 21 2018 10:31:45 GMT-0700', 'Mon Sep 21 2017 09:34:44 GMT-0700'));

// whenIsNextSaturdayNoon(<opt date>)
// a function, that if no argument is passed, returns a date for the next Saturday in the future, at noon. (edited)
// if a date argument is passed, return a date for the next Saturday after that (at noon)

function whenIsNextSaturdayNoon(optionalDate){
    let referenceDay;
    // If no date is entered as an argument, function will create a current timestamp to find the next Saturday
    if (!optionalDate){
        referenceDay = Date.now();
    }
    // First checks to see if the user submitted date argument is valid. If it isn't it will return an error message. If it is, the function will use that date to find next Saturday. The date needs to be converted to milliseconds first 
    else {
        let checkBadDate = Date.parse(optionalDate);
        if (isNaN(checkBadDate) == true){
            return 'Error, please check your date';
        }
        let dateConversion = new Date(optionalDate);
        referenceDay = dateConversion.getTime();
    }
    let millisecondsPerDay = 86400000;
    // Gets the day of the week for the entered date (user submitted or default)
    let dayOfWeek = new Date(referenceDay).getDay();
    // Takes the day of the week, adds (in milliseconds) x days to get the date of the upcoming Saturday. Can delete the day variables, I left them in to help read the getDay output (Sunday=0, Saturday=6)
    switch (dayOfWeek) {
        case 0:
            day = "Sunday";
            upcomingSaturday = String(new Date(referenceDay + 6*(millisecondsPerDay)));
        case 1:
            day = "Monday";
            upcomingSaturday = String(new Date(referenceDay + 5*(millisecondsPerDay)));
            break;
        case 2:
            day = "Tuesday";
            upcomingSaturday = String(new Date(referenceDay + 4*(millisecondsPerDay)));
            break;
        case 3:
            day = "Wednesday";
            upcomingSaturday = String(new Date(referenceDay + 3*(millisecondsPerDay)));
            break;
        case 4:
            day = "Thursday";
            upcomingSaturday = String(new Date(referenceDay + 2*(millisecondsPerDay)));
            break;
        case 5:
            day = "Friday";
            upcomingSaturday = String(new Date(referenceDay + 1*(millisecondsPerDay)));
            break;
        case 6:
            day = "Saturday";
            // Checks to see if it is past noon already on Saturday. If so, returns the following Saturday
            if (new Date(referenceDay).getHours()>12){
                upcomingSaturday = String(new Date(referenceDay + 7*(millisecondsPerDay)));
            }
            else {
                upcomingSaturday = String(new Date(referenceDay + 0*(millisecondsPerDay)));
            }
    }
    // Splits the date output up for the return statement
    const dateOutput = upcomingSaturday.split(' ');
    // Building the final return statement
    let saturdayDate = "Saturday ";
    for (let i=1; i<=3; i++){
        saturdayDate += dateOutput[i] + ' ';
    }
    saturdayDate+="at Noon";
    return saturdayDate;
}

// console.log(whenIsNextSaturdayNoon())
// console.log(whenIsNextSaturdayNoon('9/11/2001'))
// console.log(whenIsNextSaturdayNoon('4/1'))
// console.log(whenIsNextSaturdayNoon('6/1/1'))
// console.log(whenIsNextSaturdayNoon('1'))
// console.log(whenIsNextSaturdayNoon('6/1/20=04'))
// console.log(whenIsNextSaturdayNoon('Jan 4 1999'))
// console.log(whenIsNextSaturdayNoon('october/7/2004'))

const isValidParenthesis = s => {
    let arr = s.split('');
    
    for (let i=0; i<arr.length; i++){
        // console.log("arr[i]: "+arr[i]+", i: "+i+", arr:"+arr)
        if (arr[i]===')'||arr[i]==='}'||arr[i]===']'){return false}
        if(arr[i]=='('&&arr[i+1]==')'){
            arr.splice(i,2)
            i-=2
        }
        else if (arr[i]=='['&&arr[i+1]==']'){
            arr.splice(i,2)
            i-=2
        }
        else if (arr[i]=='{'&&arr[i+1]=='}'){
            arr.splice(i,2)
            i-=2
        }
    }
    if (arr.length>0){return false}
    return true;
}

// console.log(isValidParenthesis('(()[{}]{})'))

function stringMath(str){
    let expression=[];
    let number=0;
    let operators = {
        '+':43,
        '-':45,
        '*':42,
        '/':47
    }
    let split = str.split('')
    for (let i=0; i<split.length; i++){
        
        if (isNaN(split[i])){
            expression.push(number)
            expression.push(split[i])
            number=0
        }
        else{
            number+=split[i]
        }
    }
    expression.push(number)
    let answer=Number(expression[0]);
    for (let j=0; j<expression.length; j++){
        switch (expression[j]){
            case '+':
                answer+=Number(expression[j+1]);
                break;
            case '-':
                answer-=Number(expression[j+1]);
                break;
            case '*':
                answer*=Number(expression[j+1]);
                break;
            case '/':
                answer/=Number(expression[j+1]);
                break;
        }
    }
    return answer
    
} 
//caveat, ignores pemdas
// console.log(stringMath('33+3-4/4'))


// zero out everything up and down from a zero position. Try to do it in as few passes with least memory
function zeroOut(arr){
    let blankArr=[];
    let refObj ={
        line:[],
    }

    for(let p=0; p<arr.length; p++){
        for (let c=0; c<arr[0].length; c++){
            // checks all of the values for 0s and records their sub array index and array index
            if (arr[p][c]===0){
                refObj.line.push(p);
            }
            //when it gets to the end of the child array it checks to see if it is a line that needs replacing with a blank array
            else if (c===arr[0].length-1&&refObj.line[refObj.line.length-1]===p){
                // Checks if blank array has already been made
                if (blankArr.length>0){
                    arr[p]=blankArr;
                }
                // creates a blank array for substitution
                else{
                    for (let i=0; i<arr[0].length; i++){
                        blankArr[i]=0
                    }
                    arr[p]=blankArr;
                }
                
            }
        }
    }
    // for(let p=0; p<arr.length; p++){
    //     for (let c=0; c<arr[0].length; c++){
    //         if (arr[p][c]===0){
    //             let val = c
    //             for(let q=0; q<arr.length; q++){
    //                 arr[q][val]=0;
    //             }
                
    //         }
    //     }
    // }
    
    
    console.log("arr:",arr);
    console.log(refObj)
}

let arr = [
    [1,4,0,3],
    [3,1,5,9],
    [0,5,2,8],
    [1,3,3,8]
]
zeroOut(arr)
