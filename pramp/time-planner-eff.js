/* =================================================================  
  HINTS
================================================================= */

/*
- Start with brute force solution, and then optimize it
- Use fact that arrays are sorted to implement a better solution
- Ask yourself if it's necessary to check for overlaps between all possible time 
slot combinations across the two input arrays
- Ask yourself how you’d go about checking whether the intersection of two given 
time slots, say slotsA[i] and slotsA[j], yields a time slot whose duration is at 
least dur.
- Then ask what the next step would be if
  - the intersection is at least dur.
  - the intersection is less than dur.
- A solution shouldn’t be considered complete if its time complexity is worse than 
linear, i.e. O(N+M), where N and M are the lengths of slotsA and slotsB, respectively.
 */

/* =================================================================  
  SOLUTION
================================================================= */

/*
A naive solution would loop through both input arrays and check the intersection of 
every possible pair slots to find an overlap of at least dur seconds. 
This isn’t an efficient solution and its time complexity is O(N⋅M). 
We can do better than that.

Since the arrays are sorted by the slots’ start times, 
we can iterate over both arrays in a single loop. 
We use two indices, one for each array, while incrementing one index at a time according the following rules: 
- If there is a minimal overlap of dur between two given times slots, 
return the pair [start, start + dur], 
where start is the start time of said overlap. 
- Otherwise, increment the index of the array with the earlier time slot.
 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

function meetingPlanner(slotsA, slotsB, dur):
    ia = 0
    ib = 0

    while (ia < slotsA.length AND ib < slotsB.length):
        start = max(slotsA[ia][0], slotsB[ib][0])
        end = min(slotsA[ia][1], slotsB[ib][1])

        if (start + dur <= end):
            return [start, start + dur]

        if (slotsA[ia][1] < slotsB[ib][1]):
            ia++
        else:
            ib++

    return []

function meetingPlanner(slotsA, slotsB, dur) {

}  
/* =================================================================  
  TESTS
================================================================= */

console.log(meetingPlanner([[7, 12]], [[2, 11]], 5));
// Expected: []

console.log(meetingPlanner([[6, 12]], [[2, 11]], 5));
// Expected: [6,11]

console.log(meetingPlanner([[1, 10]], [[2, 3], [5, 7]], 2));
// Expected: [5,7]

console.log(meetingPlanner([[0, 5], [50, 70], [120, 125]], [[0, 50]], 8));
// Expected: []

console.log(
  meetingPlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8)
);
// Expected: [60,68]

console.log(
  meetingPlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 72]])
);
// Expected: [60,72]

/* =================================================================  
  NOTES
================================================================= */

/*
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
