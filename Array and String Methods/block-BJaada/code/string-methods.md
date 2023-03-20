Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: string
   - Return: string in uppercase
   - Example:

   ```js
   let name = "arya stark";
   name.toUpperCase(); // 'ARYA STARK'
   let sentance = "A quick brown fox jumped over a lazy dog";
   sentance.toUpperCase(); // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
   let houseName = "Starks";
   houseName.toUpperCase(); // 'STARKS'
   ```

   - `toUpperCase` accepts a string and return it in uppercase.

3. `toLowerCase`

- Parameter: string
  - Return: string in lowercase
  - Example:
  ```js
  let name = "arya stark";
  name.toLowerCase(); // 'ARYA STARK'
  let sentance = "A quick brown fox jumped over a lazy dog";
  sentance.toLowerCase(); // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
  let houseName = "Starks";
  houseName.toLowerCase(); // 'STARKS'
  ```
  - `toLowerCase` accepts a string and return it in lowercase.

4. `trim`

- Parameter: string
- Return: string without whitespace
- Example:

  ```js
  let name = "    arya stark";
  name.trim(); // 'arya stark'
  let sentance = "  A quick brown fox jumped over a lazy dog   ";
  sentance.trim(); // 'A quick brown fox jumped over a lazy dog'
  let houseName = "Starks  ";
  houseName.trim(); // 'Starks'
  ```

  - `trim` accepts a string and remove whitespace from beginning and end of the string.

5. `trimEnd`

- Parameter: string
- Return: string without whitespace at the end
- Example:

  ```js
  let name = "    arya stark";
  name.trimEnd(); // '    arya stark'
  let sentance = "  A quick brown fox jumped over a lazy dog   ";
  sentance.trimEnd(); // 'A quick brown fox jumped over a lazy dog'
  let houseName = "Starks  ";
  houseName.trimEnd(); // 'Starks'
  ```

  - `trim` accepts a string and remove whitespace from the end of the string.

6. `trimStart`

- Parameter: string
- Return: string without whitespace at start
- Example:

  ```js
  let name = "    arya stark";
  name.trimStart(); // 'arya stark'
  let sentance = "  A quick brown fox jumped over a lazy dog   ";
  sentance.trimStart(); // 'A quick brown fox jumped over a lazy dog   '
  let houseName = "Starks  ";
  houseName.trimStart(); // 'Starks   '
  ```

  - `trim` accepts a string and remove whitespace from the beginning of the string.

7. `concat`

- Parameter: one or more strings
- Return: a new concatenated string
- Example:

```js
let firstName = "Arya";
let lastName = "Stark";
let name = firstName.concat(lastName); // 'AryaStark'
let name = firstName.concat(" ", lastName); // 'Arya Stark'
let name = firstName.concat(",", lastName); // 'Arya,Stark'
```

- `concat` aceepts one or more strings and return concatenated new string.

8. `endsWith`

- Parameter: string
  length(number data type)-optional
- Return: true if given characters are found at the end of the string otherwise false (Boolean data type)
  Example:

```js
let name = "Arya Stark";
name.endsWith("rk"); // true
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.endsWith("a"); // false
sentance.endsWith("fox", 17); //true
```

9. `includes`

- Parameter: string to be searched
  Position(number data type)
- Return: true if string to be found is in given string, otherwise false.
  Example:

```js
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.includes("quick"); // true
sentance.includes("brown", 8); // true
sentance.includes("Quick"); // false
```

10. `indexOf`

- Parameter: string to be searched
  (index) defaults to 0 - (number data type)
- Return: positon of the string to be searched (number data type)

```js
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.indexOf("lazy"); // 32
sentance.indexOf("cat"); // -1
sentance.indexOf(" "); // 1
```

11. `lastIndexOf`

- Parameter: string to be searched
  (fromIndex) - optional
- Return: last occurance of the string to be searched (number data type)

```js
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.lastIndexOf("a"); // 33
let name = "Arya Stark";
name.lastIndexOf("z"); // -1
name.lastIndexOf("a", 6); // 3
```

12. `padEnd`

- Parameter: length greater than string length(number data type), string to pad
- Return: string with padstring at the end.

```js
let name = "Arya Stark";
name.padEnd(15, ".");
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.padEnd(45, ".");
let houseName = "Starks";
houseName.padEnd(8, "-");
```

13. `padStart`

- Parameter: length greater than string length(number data type), string to pad
- Return: string with padstring at the beginning.

```js
let name = "Arya Stark";
name.padStart(15, ".");
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.padStart(45, ".");
let houseName = "Starks";
houseName.padStart(8, "-");
```

14. `repeat`

- Parameter: number of times to repeat string(number data type).
- Return: string with copies.

```js
let name = "Arya Stark";
name.repeat(3);
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.repeat(2);
let houseName = "Starks";
houseName.repeat(5);
```

15. `replace`

- Parameter: string to be replaced, new string
- Return: new string with replaced substring

```js
let name = "Arya Stark";
name.replace("Arya", "Sansa");
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.replace("dog", "cat");
let houseName = "Starks";
houseName.replace("Stark", "Lannister");
```

16. `slice`

- Parameter: beginIndex(number data type), endIndex(number data type)
- Return: new extracted string

```js
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.slice(2, 18);
sentance.slice(15, -5);
sentance.slice(14);
```

17. `split`

- Parameter: separator(string), limit -optional (number data type)
- Return: an array with strings.

```js
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.split(" ", 4);
sentance.split("");
sentance.split(" ");
```

18. `substring`

- Parameter: beginIndex(number data type), endIndex(number data type)
- Return: new extracted string

```js
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.substring(2, 18);
sentance.substring(15, -5);
sentance.substring(14);
```
