Exercise 1
---
Responsive page based on the design specs, written in Vue and SCSS.

1. cd exercise1
2. yarn install
3. yarn serve
<br>

Exercise 2
---
Fetch data from a json file and present using Tabs on desktop and an Accordion on mobile, written in Vue and SCSS.

1. cd exercise2
2. yarn install
3. yarn serve
<br>
Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

* `'b' + 'a'` result to a regular concatenated string `ba`
*  `+ +'a'` result to NaN (Not a Number) due to type conversion as `a` is a string 
* `baNaN +'a'` concatenates normally and applying .toLowerCase() converst the whole string to lowercases
