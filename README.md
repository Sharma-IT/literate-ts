# Literate TypeScript Programming Example

## What is Literate Programming?

Literate programming, introduced by Donald Knuth in 1984, is a programming paradigm that treats programs as pieces of literature. Instead of organising programs primarily for the computer to consume, you organise them to be read by people, with proper narrative flow, explanations, and documentation interwoven with the actual code.

### Benefits for TypeScript Projects

1. **Enhanced Documentation**: Documentation is written alongside code, making it easier to maintain and keep in sync
2. **Better Knowledge Transfer**: New team members can understand not just what the code does, but why certain decisions were made
3. **Self-Reviewing Code**: The narrative structure forces developers to think through and explain their implementation choices
4. **TypeScript Integration**: TypeScript's strong typing system complements literate programming by making code intentions explicit

## Project Structure

```
literate-ts/
├── src/
│   ├── binary-search.ts      # My example algorithm implementation
│   └── binary-search.test.ts # Comprehensive test suite
├── package.json              # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run the example:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```

5. Generate documentation:
   ```bash
   npm run doc
   ```

6. View documentation in browser:
   ```bash
   npx serve docs
   ```
   Then open http://localhost:3000 in your browser.

## About This Project

This project demonstrates literate programming principles using a binary search algorithm implementation. The code is written in TypeScript with extensive documentation that explains not just how the algorithm works, but why certain implementation choices were made.

I use TypeScript's built-in JSDoc support along with markdown documentation to create a readable and maintainable codebase that serves as both documentation and working code.

## Testing Strategy

The project includes a comprehensive test suite that follows literate programming principles. The tests are organised into logical categories:

1. **Number Arrays**
   - Basic functionality with primitive number types
   - Tests for elements at start, middle, and end
   - Tests for non-existent elements

2. **String Arrays**
   - String comparison functionality
   - Case sensitivity handling
   - Tests with alphabetical ordering

3. **Custom Objects**
   - Testing with complex data structures
   - Multiple comparison strategies (by age, by name)
   - Custom type demonstrations

4. **Edge Cases**
   - Empty arrays
   - Single-element arrays
   - Arrays with duplicate values

The test suite achieves 100% code coverage and serves as both verification of functionality and documentation of expected behavior.

## Key Features

- Detailed algorithm explanation using JSDoc comments
- Type-safe implementation with TypeScript
- Unit tests with documentation
- Example usage scenarios

## Learning Outcomes

By studying this project, you will learn:
1. How to write self-documenting code
2. Best practices for TypeScript documentation
3. How to balance technical implementation with narrative documentation
4. Practical application of literate programming principles
5. Test-driven development with literate programming
