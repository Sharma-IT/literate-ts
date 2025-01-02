/**
 * # Binary Search Implementation
 * 
 * This module demonstrates a literate programming approach to implementing
 * the binary search algorithm. Binary search is an efficient algorithm
 * for finding an element in a sorted array with a time complexity of O(log n).
 * 
 * ## Algorithm Overview
 * 
 * Binary search works by repeatedly dividing the search interval in half.
 * Given a sorted array, we:
 * 1. Find the middle element
 * 2. If the middle element is the target, return its index
 * 3. If the target is less than the middle, search the left half
 * 4. If the target is greater than the middle, search the right half
 * 
 * ## Implementation Details
 * 
 * We implement this algorithm using TypeScript's generics to make it work
 * with any comparable type, not just numbers. This demonstrates how
 * TypeScript's type system can make our code more reusable while
 * maintaining type safety.
 */

/**
 * Represents a function that compares two values of type T.
 * Returns:
 * - negative number if a < b
 * - 0 if a === b
 * - positive number if a > b
 */
type CompareFunction<T> = (a: T, b: T) => number;

/**
 * A generic binary search implementation that works with any comparable type.
 * 
 * @param array - The sorted array to search in
 * @param target - The value to find
 * @param compare - A function that compares two elements
 * @returns The index of the target if found, -1 otherwise
 * 
 * @example
 * ```typescript
 * const numbers = [1, 3, 5, 7, 9];
 * const index = binarySearch(numbers, 5, (a, b) => a - b);
 * console.log(index); // Output: 2
 * ```
 */
export function binarySearch<T>(
    array: T[],
    target: T,
    compare: CompareFunction<T>
): number {
    // Initialize our search boundaries
    let left = 0;
    let right = array.length - 1;

    // Continue searching while we have a valid range
    while (left <= right) {
        // Calculate the middle index, avoiding potential integer overflow
        const mid = left + Math.floor((right - left) / 2);
        
        // Compare the middle element with our target
        const comparison = compare(array[mid], target);

        // If we found our target, return its index
        if (comparison === 0) {
            return mid;
        }

        // If the middle element is greater than the target,
        // search in the left half
        if (comparison > 0) {
            right = mid - 1;
        }
        // Otherwise, search in the right half
        else {
            left = mid + 1;
        }
    }

    // If we get here, the target wasn't found
    return -1;
}

/**
 * ## Example Usage
 * 
 * Below are examples of using our binary search implementation
 * with different types of data.
 */

// Example with numbers
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
const numberCompare = (a: number, b: number) => a - b;
console.log(`Finding 7 in numbers: ${binarySearch(numbers, 7, numberCompare)}`);

// Example with strings
const words = ['apple', 'banana', 'orange', 'pear', 'zebra'];
const stringCompare = (a: string, b: string) => a.localeCompare(b);
console.log(`Finding 'orange' in words: ${binarySearch(words, 'orange', stringCompare)}`);

// Example with custom objects
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

const personCompare = (a: Person, b: Person) => a.age - b.age;
const targetPerson: Person = { name: 'Charlie', age: 35 };
console.log(`Finding person aged 35: ${binarySearch(people, targetPerson, personCompare)}`);
