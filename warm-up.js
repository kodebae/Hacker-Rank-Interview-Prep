/* * 
! Sales By Match
 * There is a large pile of socks that must be paired by color. 
 * Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.
 ? int n: the number of socks in the pile
 ? int ar[n]: the colors of each sock
 * **/

 function sockMerchant(n, ar) {
    // Write your code here
        var total_socks = 0; // creating a variable to save our count
        ar.sort() // sorintg the order of the array
            for(let i = 0; i<n; i++){ // for looping over the number of socks in pile
                if(ar[i] == ar[i +1]){ // comparing the indexes right next to each other
                    i++; // incrementing the count by 1 each time they match
                        total_socks++; // adding to the variable to keep count
                }
            } 
            return total_socks; // returning the final count
    } 

/* * 
 ! Jumping on the Clouds
 * There is a new mobile game that starts with consecutively numbered clouds. 
 * Some of the clouds are thunderheads and others are cumulus. 
 * The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . 
 * The player must avoid the thunderheads. 
 * Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
 * It is always possible to win the game.
 * For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
 ? jumpingOnClouds has the following parameter(s):
 ? int c[n]: an array of binary integers
 ? int: the minimum number of jumps required
 ? Print the minimum number of jumps needed to win the game.
 * */

 function jumpingOnClouds(c) {
    let jumps = 0; // a place to store jumps
    for(let i = 0; i < c.length; i++) { // looping over c 
        if(c[i + 2] === 0) { // if we can move 2
            jumps++; // add to jumps
            i++; // go to the next [i]
        } else if(c[i + 1] === 0) { // if we can move 1
            jumps++; // add to jumps
        }
    }
    return jumps; // return the final count
}

/* * 
 ! Two Number Sum
 * Write a function that takes in a non empty array of distinct integers,
 * and a target sum. Return any two numbers that add up to the target sum.
 * if no two nums exist return empty array
 ? Two Number Sum has the following parameter(s):
 ? int c[n]: an array of non empty integers
 ? int: the target sum
 ? Return the two nums that add up to the target sum
 * */

 function twoNumberSum(array, targetSum) {
    // Write your code here.
  const prevValues = {}; // create hash table
      for (const num of array) { // looping over the array and getting each num
          const potentialMatch = targetSum - num; // helper var to store our math 
          if (potentialMatch in prevValues) { // condtional statement to compare math
              return [potentialMatch, num]; // return the match and the num
          } else { // or else
              prevValues[num] = true; // if we already have what we are looking for, return it
          }
      }
      return[]; // if not return empty array
  }
  
  /* 
  input = an array of integers and a target sum we are trying to reach
  output = array of num1 and num2
  
  output = an array with [potentialMatch, num]
  
  use a hashtable, create var called const prevValues = {}
  create a varible called potentialMatch to hold the equation ==
  equations = loop over the array and compare each index to the target value with subtraction
  return an array with numbers [1,3]
  
  */


