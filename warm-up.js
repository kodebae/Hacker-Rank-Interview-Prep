/** Sales By Match
 * There is a large pile of socks that must be paired by color. 
 * Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.
 * int n: the number of socks in the pile
 * int ar[n]: the colors of each sock
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