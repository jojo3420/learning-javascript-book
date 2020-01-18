
const people = [
  { name: 'park', age: 20, gender: 'M' },
  { name: 'jane', age: 30, gender: 'W' },
  { name: 'James', age: 22, gender: '' },
];

const say = ({ name, age, gender }) => {
  console.log(`name: ${name}, age:${age}, gender:${gender}`)
};

for (const p of people) {
  say(p);
}
