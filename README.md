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

# Ideas

## Celsius to Fahrenheit

Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

Formula:

°C x 9/5 + 32 = °F
(°F - 32) x 5/9 = °C

Example:

37°C x 9/5 + 32 = 98.6°F
37°C = 98.6°F

## Reverse Numbers

Write a JavaScript function that reverse a number. Go to the editor
Example:

Input:
x = 32243;

Output:
34223

## JSBIN url generator

Write a JavaScript function that will randomly generate a 6 character string that alternates between consonants and vowels.

List of consonants:
B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Y, Z

List of vowels:
A, E, I, O, U

Examples:
fabuti, nitize, taqake, wuwuya

## Table Generator

Write a function that will generate a table that is a user-specified number of rows and columns.

Input:

number of rows
number of columns
character to use
Example:
createTable(5, 5, 'm')

Output:

mmmmm
mmmmm
mmmmm
mmmmm
mmmmm

## Table Generator (Version 2)

Write a function that will generate a table of alternating characters of 'x' and 'o' based on a user-specified number of rows and columns.

Input:

number of rows
number of columns
Example:
createTable(5, 5)

Output:

xoxox
oxoxo
xoxox
oxoxo
xoxox

## Fibonacci calculator

You need to implement Fibonacci number calculator in JavaScript. You should be able to change the index. The Fibonacci sequence follows those rules:

The first two numbers of the sequence are 0 and 1,
Each subsequent number is the sum of the previous two.

Example:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

Input: 3

Output: 2

(Extra credit: Try to solve the problem by using recursion.)
