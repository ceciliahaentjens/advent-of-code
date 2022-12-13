# 💼 Day 3 – Rucksack Reorganization

- [Answers and notes](#part-1) for Part One
- [Answers and notes](#part-2) for Part Two

## Instructions

One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

```
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
```

- The first rucksack contains the items `vJrwpWtwJgWrhcsFMMfFFhFp`, which means its first compartment contains the items `vJrwpWtwJgWr`, while the second compartment contains the items `hcsFMMfFFhFp`. The only item type that appears in both compartments is lowercase `p`.
- The second rucksack's compartments contain `jqHRNqRjqzjGDLGL` and `rsFMfFZSrLrFZsSL`. The only item type that appears in both compartments is uppercase `L`.
- The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase `P`.
- The fourth rucksack's compartments only share item type `v`.
- The fifth rucksack's compartments only share item type `t`.
- The sixth rucksack's compartments only share item type `s`.

To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types `a` through `z` have priorities 1 through 26.
Uppercase item types `A` through `Z` have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (`p`), 38 (`L`), 42 (`P`), 22 (`v`), 20 (`t`), and 19 (`s`); the sum of these is `157`.

## Part 1

<b>Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types&nbsp;? Answer&nbsp;: `8349`</b>

---

### Notes

I started by decomposing instructions and ended up with the conclusion that I first needed to find the same character in a `rucksack` and then get the `priority` of this character. I’ve created two helper function to do this that you can check [here](/2022/day-3/helpers/helper.js).

`findSameChar` takes an array of `strings` and uses the first one as a `ref` string. Then, I’m looping through each character (`ref[i]`) of the `ref` string and then looping through the `comparisons` strings (`comparisons[c]`). The second string of the `comparisons` array is like a « second ref string »&nbsp;: if the character we’re on is in this « second ref string », I keep it in a `sameChars` array (if not already in it).

```js
if (charPos > -1 && c === 0 && !sameChars.includes(ref[i])) { ... }
```

Then, as I’m checking the others strings (3, 4, 5…), I just need to remove a character from the `sameChars` array if it’s not in the current string. <b>The only character left in the `sameChars` array is the common character between every strings</b>.

```js
if (charPos === -1 && c > 0 && sameChars.includes(char)) { ... }
```

> To be honest, I first created a `findSameChar` function that was only comparing two strings, it was much shorter and simplier. As I was reading the second part, I chose to work again on this function to allow it to take a multiple number of string. As it is written, you can compare 3 strings like in the second part, but also 10, 100 or more strings.

`getPriority` takes a character and returns its priority. As the priority corresponds to the character position in the alphabet, I used `ASCII` to calculate it. In ASCII, the alphabet starts at `97` but we need it to start at `1` so we retrieve `96` from the `charCodeAt()` result. if we only do this, uppercase letters won’t return the right value because the uppercase alphabet has a totally different ASCII value. Then, I returned the ASCII value of the `toLowerCase()` value of the character and first added `26` to the result because, for example, we want `A` to value `27` instead of `1`.

-

## Part 2

As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type `B`, then all three Elves will have item type `B` somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines&nbsp;:

```
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
```

In the first group, the only item type that appears in all three rucksacks is lowercase `r`; this must be their badges. In the second group, their badge item type must be `Z`.

<b>Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types&nbsp;? Answer&nbsp;: `2681`</b>

---

### Notes

As I explained it in the first part, I’ve modified the `findSameChar` function when I read this part so I could use this same method to find a similar character in my three strings. I just first needed to `slice` the input in groups of three strings with my `sliceGroups` function.
