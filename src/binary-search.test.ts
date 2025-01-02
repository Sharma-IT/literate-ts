/**
 * # Binary Search Algorithm Test Suite
 * 
 * This test suite demonstrates comprehensive testing of the binary search
 * implementation, covering various data types and edge cases. Following
 * literate programming principles, each test case is thoroughly documented
 * to explain both what is being tested and why it matters.
 */

import { binarySearch } from './binary-search';

/**
 * ## Test Organisation
 * 
 * The tests are organised into logical groups using describe blocks:
 * 1. Number arrays - testing with primitive number types
 * 2. String arrays - testing with string comparisons
 * 3. Object arrays - testing with custom object types
 * 4. Edge cases - testing boundary conditions and error cases
 */

describe('Binary Search Algorithm', () => {
  /**
   * ## Number Array Tests
   * 
   * These tests verify the basic functionality using number arrays,
   * which are the most common use case for binary search.
   */
  describe('with number arrays', () => {
    const numbers = [-10, -5, 0, 2, 5, 10, 15, 20, 25];
    const compareNumbers = (a: number, b: number) => a - b;

    test('finds element at the beginning', () => {
      expect(binarySearch(numbers, -10, compareNumbers)).toBe(0);
    });

    test('finds element at the end', () => {
      expect(binarySearch(numbers, 25, compareNumbers)).toBe(8);
    });

    test('finds element in the middle', () => {
      expect(binarySearch(numbers, 5, compareNumbers)).toBe(4);
    });

    test('returns -1 for element not in array', () => {
      expect(binarySearch(numbers, 7, compareNumbers)).toBe(-1);
    });
  });

  /**
   * ## String Array Tests
   * 
   * These tests verify that the algorithm works correctly with string
   * comparisons, which require a different comparison function than numbers.
   */
  describe('with string arrays', () => {
    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    const compareStrings = (a: string, b: string) => a.localeCompare(b);

    test('finds first string', () => {
      expect(binarySearch(words, 'apple', compareStrings)).toBe(0);
    });

    test('finds last string', () => {
      expect(binarySearch(words, 'elderberry', compareStrings)).toBe(4);
    });

    test('finds middle string', () => {
      expect(binarySearch(words, 'cherry', compareStrings)).toBe(2);
    });

    test('returns -1 for string not in array', () => {
      expect(binarySearch(words, 'fig', compareStrings)).toBe(-1);
    });

    test('handles case sensitivity', () => {
      expect(binarySearch(words, 'Apple', compareStrings)).toBe(-1);
    });
  });

  /**
   * ## Custom Object Tests
   * 
   * These tests demonstrate how the algorithm works with custom object types,
   * showing its flexibility with complex data structures.
   */
  describe('with object arrays', () => {
    interface Person {
      name: string;
      age: number;
    }

    const people: Person[] = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
      { name: 'David', age: 40 },
      { name: 'Eve', age: 45 }
    ];

    // Compare by age
    const compareByAge = (a: Person, b: Person) => a.age - b.age;
    
    // Compare by name
    const compareByName = (a: Person, b: Person) => a.name.localeCompare(b.name);

    test('finds person by age', () => {
      const target: Person = { name: 'Anyone', age: 35 };
      expect(binarySearch(people, target, compareByAge)).toBe(2);
    });

    test('finds person by name', () => {
      const target: Person = { name: 'Charlie', age: 999 };
      expect(binarySearch(people, target, compareByName)).toBe(2);
    });

    test('returns -1 for non-existent age', () => {
      const target: Person = { name: 'Anyone', age: 37 };
      expect(binarySearch(people, target, compareByAge)).toBe(-1);
    });
  });

  /**
   * ## Edge Cases
   * 
   * These tests verify that the algorithm handles edge cases correctly,
   * such as empty arrays, single-element arrays, and duplicate values.
   */
  describe('edge cases', () => {
    const compareNumbers = (a: number, b: number) => a - b;

    test('handles empty array', () => {
      expect(binarySearch([], 5, compareNumbers)).toBe(-1);
    });

    test('handles single-element array - element found', () => {
      expect(binarySearch([1], 1, compareNumbers)).toBe(0);
    });

    test('handles single-element array - element not found', () => {
      expect(binarySearch([1], 2, compareNumbers)).toBe(-1);
    });

    test('handles array with duplicate values', () => {
      const numbers = [1, 2, 2, 2, 3];
      // Should find one of the 2's, exact index may vary
      const result = binarySearch(numbers, 2, compareNumbers);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });
  });
});
