# Day XXX – XXX

## Instructions

You can hear birds chirping and raindrops hitting leaves as the expedition proceeds. Occasionally, you can even hear much louder sounds in the distance; how big do the animals get out here, anyway?

The device the Elves gave you has problems with more than just its communication system. You try to run a system update:

```
$ system-update --please --pretty-please-with-sugar-on-top
Error: No space left on device
```

Perhaps you can delete some files to make space for the update&nbsp;?
You browse around the filesystem to assess the situation and save the resulting terminal output (your puzzle input).

The filesystem consists of a tree of files (plain data) and directories (which can contain other directories or files). The outermost directory is called /. You can navigate around the filesystem, moving into or out of directories and listing the contents of the directory you're currently in.

[See more of the instructions](https://adventofcode.com/2022/day/7)

## Part 1

<b>Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories&nbsp;? Answer&nbsp;: `1611443`</b>

### Notes

...

## Part 2

Now, you're ready to choose a directory to delete.

The total disk space available to the filesystem is `70000000`. To run the update, you need unused space of at least `30000000`. You need to find a directory you can delete that will free up enough space to run the update.

In the example above, the total size of the outermost directory (and thus the total amount of used space) is `48381165`; this means that the size of the unused space must currently be `21618835`, which isn't quite the `30000000` required by the update. Therefore, the update still requires a directory with total size of at least `8381165` to be deleted before it can run.

To achieve this, you have the following options:

Delete directory `e`, which would increase unused space by `584`.
Delete directory `a`, which would increase unused space by `94853`.
Delete directory `d`, which would increase unused space by `24933642`.
Delete directory `/,` which would increase unused space by `48381165`.
Directories `e` and `a` are both too small; deleting them would not free up enough space. However, directories `d` and `/` are both big enough&nbsp;! Between these, choose the smallest&nbsp;: `d`, increasing unused space by `24933642`.

<b>Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory&nbsp;? Answer&nbsp;: `2086088`</b>

### Notes

...
