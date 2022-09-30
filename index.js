// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

/*

Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35
*/


function minMax(arr){

  let min = arr[0];
  let max = arr[0];

  for(let i=1; i<arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i];
    }
  }

  console.log("Max is: "+ max);  
  console.log("Min is: "+ min); 
}

minMax([1,2,3,4]);