# JavaScript Katas

JavaScript practice exercises.

## How to run the tests

Make sure you have npm installed and that you have mocha installed globally:

```
npm install -g mocha
```

In the directory of the exercise, run:

```
npm install
mocha tests.js
```

## Fuzzy Time

Write a function that takes a time in a numeric format, such as '13:04', and returns the time as a string spelled out in english, such as 'five after 1'.

## Merge Overlapping Intervals

[https://blog.svpino.com/2015/05/17/programming-challenge-merging-overlapping-intervals](https://blog.svpino.com/2015/05/17/programming-challenge-merging-overlapping-intervals)

Given a collection of intervals, write a function that merges all overlapping intervals and prints them out.

For example, given [1, 3], [2, 6], [8, 10], and [7, 11], the function should print [1, 6], [7, 11]. Or given [5, 12], and [8, 10] the function should print [5, 12].

You can assume that the first element of each interval is always less or equal than the second element of the interval.
