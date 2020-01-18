
const newArr = [1, 2, 3, 4, 5].map(n => n * 2);
console.log('newArr: ', newArr);

const books = [
  { title: 'Learning Javascript', publisher: 'AAA', page: 200 },
  { title: 'Learning React', publisher: 'BBB', page: 300 },
  { title: 'Learning Nodejs', publisher: 'CCC', page: 444 },
];

function say ({ title, publisher, page }) {
  console.log(`title: ${title}, publisher: ${publisher}, page: ${page}`);
}

for (const book of books) {
  say(book);
}
