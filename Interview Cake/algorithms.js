// Merged Meeting Algorithm

function mergeRanges(meetings) {
  if (meetings.length===0){
    return 'No meetings in range';
  }
  if (meetings.length===1){
    return meetings;
  }
  
  // Make deep copy
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  // sort by start time
  const sortedMeetings = meetingsCopy.sort((a,b)=>{
    return a.startTime - b.startTime;
  });
  // Add first meeting to the array we want to return
  let mergedMeetings=[sortedMeetings[0]];
  // Used to keep track of our comparison index in the return array
  let mergedCounter=0
  // Iterates through sorted meetings
  for (let i=1; i<sortedMeetings.length; i++){
    let currentMeeting= sortedMeetings[i];
    let pastMeeting= mergedMeetings[mergedCounter]
    //Checks if the current meeting starts before the last meeting's end time and ends after last meeting's end time. If so, it adjusts the last meeting's end time to reflect. 
    if (currentMeeting.startTime<=pastMeeting.endTime&& currentMeeting.endTime>pastMeeting.endTime){
      pastMeeting.endTime = currentMeeting.endTime;
    }
    // If the current meeting starts after the last meeting's end time, it adds a new entry in teh merged meeting array and adjusts the index for future comparison
    if (currentMeeting.startTime>pastMeeting.endTime){
      mergedCounter++;
      mergedMeetings[mergedCounter]=currentMeeting;
    }
  }
  //Spits out the merged meeting calendar
  return mergedMeetings;
}



let schedules =  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]; 

// console.log(mergeRanges(schedules))

// Reverse a string in place (using an array) algorithm

function reverseArr(arr){
  let midPoint = Math.floor(arr.length/2)
  for (let i=0; i<midPoint; i++){
    let temp= arr[i];
    arr[i]= arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
  }
  return arr;
}

let input=['W','a','r','e','n']
// console.log(reverseArr(input));

// Reverse Array of words in place

function reverseArray(array){
  let start = 0;
  for (let i=0; i<array.length; i++){
    if (array[i+1]===" "||(i+1)===array.length){
      let end=i;
      let dif = end-start;
      let runTime = Math.floor(dif/2)
      for (let j=0; j<=runTime; j++){
        let temp = array[start];
        array[start]=array[end];
        array[end]=temp;
        start++;
        end--;
      }
      start=i+2;
    }
  }
  reverseArr(array);
  return array.join("");
}

const message = [ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ','s', 't', 'e', 'a', 'l'];

// console.log(reverseArray(message));

// Merge Sorted Arrays

function arrayMerge(arr1, arr2) {
  let mergeIndex=0;
  let arrOneIndex=0;
  let arrTwoIndex=0;
  let timer = arr1.length + arr2.length;
  let mergeArr = [];
  while (timer>0) {
      if (arr1[arrOneIndex]<=arr2[arrTwoIndex]||arrTwoIndex===(arr2.length)) {
          mergeArr[mergeIndex] = arr1[arrOneIndex];
          mergeIndex++;
          arrOneIndex++;
      }
      else if (arr2[arrTwoIndex]<arr1[arrOneIndex]||arrOneIndex===(arr1.length)){
          mergeArr[mergeIndex] = arr2[arrTwoIndex];
          mergeIndex++;
          arrTwoIndex++;
      }
      timer--;
  }
  return mergeArr;

}

let arrMerge1 = [1,3,5,7];
let arrMerge2 = [2,4,6,8];

// console.log(arrayMerge(arrMerge1, arrMerge2));

let deck = [1,7,2,6,3,5,8,4]
let half1 = [1, 2, 3, 4]
let half2 = [5, 6, 7, 8]

function didItRiffle(deck, half1, half2){
  // The constant splicing adds a lot more time complexity. It's better to keep track of the index for each half as a variable and pass that in the function. 
  if (deck[0]===half1[0]){
      deck.splice(0,1);
      half1.splice(0,1)
      if (deck.length ===0){
          console.log('no more cards in deck, 1 riffle')
          return true;
      }
      return didItRiffle(deck, half1, half2)
  }
  else if (deck[0]===half2[0]){
      deck.splice(0,1);
      half2.splice(0,1)
      if (deck.length ===0){
          console.log('no more cards in deck, 1 riffle')
          return true;
      }
      return didItRiffle(deck, half1, half2)
  }
  else {
      console.log('more than a single riffle detected')
      return false
  };
}

// console.log(didItRiffle(deck, half1, half2))



// Two Movies on a flight- write a function that can determine if two movies total runtime equals that of a the flight

function twoMovieOneFlight(flightTime, movieRunTimeArray){
  let movieNum=1;
  let maps = {};
  for(let i=0; i<movieRunTimeArray.length; i++) {
    let key = 'movie'+movieNum;
    maps[key]=movieRunTimeArray[i];
    movieNum++;
  }
  for(let j=0; j<movieRunTimeArray.length; j++){
    for (map in maps){
      if (movieRunTimeArray[j]+maps[map]===flightTime){
        return true;
      }
    }
  }
  return false;
}

const movies = [90, 120, 110, 69, 140];
flightTime = 200;

console.log(twoMovieOneFlight(flightTime, movies))