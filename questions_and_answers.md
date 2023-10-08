<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>

```
in first line `let greeting` defined a local variable named `greeting` but not assigned any value.
in second line `greetign = {}` defined a global scope variable `greetign` with assign an empty object.
in third line console the `greetign` variable which is containing empty object.

So the answer is `{}`
```

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>

```
first of all a function named sum() is declared with two parameters a & b without any default value assigned.
then invoked the sum function with two arguments `1` & `'2'`.
Here `1` in number types & `'2'` is string type. In JavaScript, it is impossible to sum two non-numeric values, so it concate them side by side.

So,the answer is `"12"`;
```

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>
```
Firstly, two constant variables food (Array type) & info (Object type) are declared.
in the object `info` a property `favoriteFood` declared & assigned a value which is contained in the declared array `food`'s first index. So no reference copy.
secondly, for `info` a new value is assigned to the existing property `favoriteFood`, which update the value of the property not to the array first index.
thirdly, consoling the `food` array which containing the elements on declaring state.

So, the answer is A
```
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
```
Firstly, a function `syHi` is declared with a parameter `name` without any default value.
Then consoling this function invoked without passing any argument, assign `undefined` to the parameter `name` and print the return value with the value of name i.e. `undefined`.

So, answer is B.
```
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
```
In First line a count local scoped variable is declared with assign `0`.
second line declare a constant array variable `nums` with [0, 1, 2, 3] which contained `0` in first index.

then run forEach loop through the array elements & in the loop check each times that the value is truthy. if the value is truthy then increase `count` by 1.

Since, first element `0` is falsy so `count` increase after 2nd element & increasing 1 for rest 3 elements `count` contain `3`.

So, answer is 3.
```
</p>
</details>
