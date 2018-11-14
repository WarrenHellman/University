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



