
function GetTheMedian(movingWindow)
{
    movingWindow.sort((a, b) => a - b);
    if(movingWindow.length % 2 == 0) {
      let i1 = (movingWindow.length - 1) / 2;
      let i2 = i1 + 1;      
      return (movingWindow[i1] + movingWindow[i2]) / 2;
    } else {
        let i = ((movingWindow.length - 1) / 2);
        return movingWindow[i];
    }
}

function GetNextSlidingWindow(arr, listOfMedian, listOfNumber, index, n) {
    let movingWindow = [];    
    let i = 0;
    while(i < n) {
        if(listOfNumber[index + i] != null) {
            movingWindow.push(listOfNumber[index + i]);
            i++;
        } else {
            return listOfMedian;
        }
    }
    let median = GetTheMedian(movingWindow);
    listOfMedian.push(median);
    index++;
    return GetNextSlidingWindow(arr, listOfMedian, listOfNumber, index, n);
}

function ArrayChallenge(arr) {
    let n = arr[0];
    let listOfNumber = arr.slice(1, arr.length);
    let listOfMedian = [];
    i = 1;
    while(i < n) {        
        listOfMedian.push(i);
        i++;
    }
    let index = 0;
    let result = GetNextSlidingWindow(arr, listOfMedian, listOfNumber, index, n);
    console.log(result);
}


function main() {
    let arr = [3, 1, 3, 5, 10, 6, 4, 3, 1];
    ArrayChallenge(arr);
}

main();

/*
 
Have the function ArrayChallenge(arr) read the array of numbers stored in arr which will 
contain a sliding window size, N, as the first element in the array and the rest will be a 
list of numbers. 
Your program should return the Moving Median for each element based on the 
element and its N-1 predecessors, where N is the sliding window size. 
The final output should 
be a string with the moving median corresponding to each entry in the original array separated by commas.
Note that for the first few elements (until the window size is reached), the median is computed 
on a smaller number of entries. 
For example: if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should output "1,2,3,5,6,6,4,3"
Input: new int[] {5, 2, 4, 6}
Output: 2,3,4
Input: new int[] {3, 0, 0, -2, 0, 2, 0, -2}
Output: 0,0,0,0,0,0,0
 */

/*
                               = 1
                               = 2
1, 3,  5                       = 3
   3,  5,  10                  = 5
       5,  10,  6              = 6  (6 because its sorted)
           10,  6,  4          = 6 
                6,  4,  3      = 4
                    4,  3,  1  = 3
            
---------------------------------------      
              = 2
              = 3,
              = 4
5, 2, 4, 6  
*/