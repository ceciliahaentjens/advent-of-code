# 🍪 Day 1 – Calorie Counting

- [Answers and notes](#part-1) for Part One
- [Answers and notes](#part-2) for Part Two

## Instructions

The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line. In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories.<br>
[See more](https://adventofcode.com/2022/day/1)

## Part One

<b>Find the Elf carrying the most Calories. How many total Calories is that Elf carrying&nbsp;? Answer&nbsp;: `65912`</b>

### Notes

For this part, I just splitted `elves` in an array and mapped it. I splitted again each `elf` to get their carried calories and used `reduce` to get their `total calories`.<br />
To get the `elf` carrying more calories, I chose to `reduce` again the `elves` array with a simple operation&nbsp:<br />

```js
elves.reduce((prev, cur) => (cur > prev ? cur : prev));
```

> I’ve realised later, regarding of the <b>second part</b>, that it might have been better for performance to `sort` the array and return the first value instead of using the `reduce` method.

## Part Two

By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

<b>Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total&nbsp;? Answer&nbsp;: `195625`</b>

### Notes

I did the same as part 1 but instead of using `reduce` right away, I’ve `sorted` the array, used `splice` to get the first 3 elves total calories and `reduced` them with an addition.
