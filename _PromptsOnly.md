# Index

## List of algo problems and their prompts

- **coinPurse**  
  Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations.
  Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount, return -1.  
  **Example:**  
  ([1, 2, 5, 10], 7) --> 3

- **getAllPermutations**  
  Write a function that takes a string and returns an array with all of the possible permutations. (No repetitions)
  **Example:**  
  'abc' --> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

- **multiply**  
  multiply two int arrays
  Given two integers in array format - i.e. 123 is [1,2,3], 987 is [9,8,7], return their product in array format so result is [1,2,1,4,0,1]
  you shouldn’t be using .split and .join, also it should work for positive and negative ints.  (Aim for time complexity of O(n\*m) with space complexity of O(n+m).  
  **Example:**  
  [1,2,3] \* [9,8,7] ===> [1,2,1,4,0,1]

- **oneOrZeroAway**  
  There are 3 types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.  
  **Example:**
  'pale', 'ple' --> true
  'pales', 'pale' --> true
  'pale', 'bale' --> true
  'pale', 'bae' --> false

- **powerSet**  
  Given an array of distinct elements, compute an array whose items are all arrays corresponding to subsets of the original array.    
  **Example:**  
  [1, 2, 3 ] --> [ [], [ 1 ], [ 2 ], [ 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]

- **searchInRotatedSortedArray**  
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
  You are given a target value to search. If found in the array return its index, otherwise return -1.
  You may assume no duplicate exists in the array.  
  _Your algorithm’s **runtime complexity** must be in the order of O(log n)._  
  **Example 1:** [4,5,6,7,0,1,2], 0 --> 4  
  **Example 2:** [4,5,6,7,0,1,2], 3 --> -1

- **intervals**  
  Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). You may assume that the intervals were initially sorted according to their start times.  
  **Example 1:** intervals = [[1,3],[6,9]], newInterval = [2,5]  -->   [[1,5],[6,9]]  
  **Example 2:** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] --> [[1,2],[3,10],[12,16]] (Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].)
