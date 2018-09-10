// Recursion

// Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
  num = Math.floor(num)
  let sum = num;
  if (num <=0) {
    return 0;
  }
  while (num>0) {
    num-=1;
    sum+= num; 
    rSigma(num-1)
  }
  return sum;
}

// console.log(rSigma(5))

function rsigma(n){
  if (n<=0){return 0;}
  return rsigma(n-1) + Math.floor(n);
}

// console.log(rsigma(4))

// Recursive Factorial

// Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 . rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFactorial(n) {
  if (n===0){return 1};
  if (n<0){return "Cannot factorialize negative numbers"}
  return Math.floor(n)*rFactorial(Math.floor(n-1))
}

// console.log(rFactorial(-2))

// Write rFib(num) . Recursively compute and return num th Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) = 0

// function rFib(n) {
//   if (n < 1){return 0};
//   if (n===1){return 0};
  
//   return rFib(Math.floor(n)-1) + rFib(Math.floor(n)-2);

// }

function rFib(n){
    // base cases
    if (n < 1) {return 0;}
    if (n===1) {return 1;}

    return rFib(Math.floor(n)-1) + rFib(Math.floor(n)-2);
}
// just returns 0

// function rFib(n) {
//   if <
// }
// console.log("rFib result is "+rFib(3))

function rTrib(n){
  if (n<1) {return 0};
  if (n===1){return 1};
  if (n===2){return 1};

  return rTrib(n-1) + rTrib(n-2) +rTrib(n-3);
}

// console.log(rTrib(7))


// Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true .

function rBinary(arr, n, high, low){
  if (!low){
    var low = 0;
    // console.log("no low")
  }
  if (!high) {
    var high = arr.length-1;
    // console.log("no high")
  }
  
  let mid = Math.floor(high-low)/2
  // console.log(high)
  // console.log(low)
  // console.log(mid)
  if (arr[mid]===n){return true};
  if (n>arr[mid]) {
    low = mid+1;
    return rBinary(arr, n, high, low);
  }
  else {
    high = mid-1;
    console.log("low: "+low+" high: "+high)
    return rBinary(arr, n, high, low);
  }
  

}

console.log(rBinary([1,4,5,6,8,10], 4));