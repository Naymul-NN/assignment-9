. Write the correct answer from the following options and give an explanation (2-5 lines).


let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined


Answer: A.
explanation: here you frist dont declar the value of greeting , then you declar it by useing the variable let . variable let has this power ,



2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3


Answer: D 3
explanation: here 2 is string but javascript count is as a number , but if you use === oparator then it will not work it will show a typeerror


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError


Answer: A 
explanation: info.favoriteFood variable is initially assigned the value of food[0], which is "🍕".
Then, it is reassigned the value "🍝". However,
this reassignment does not affect the original food array. Therefore, when you log the food array,
it remains unchanged, and the output will be `['🍕', '🍫', '🥑', '


4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError


Answer: B 
explanation: WHen a fuction is called without passing a value then it show undefind.



5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4


Answer: C
explanation: forEach fucction is run here 4 time first value is 0 then incremented 1 , 2 , 3 to fullfill the condition count += 1 ;
