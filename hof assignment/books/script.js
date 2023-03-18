const books_list = [
  { title: "the wings of fire", author: "apj abdul kalam", year: 2001 },
  { title: "poppy weed", author: "jk rowling", year: 2008 },
  { title: "silent killer", author: "kuku fm", year: 2020 },
  { title: "sun of my life", author: "praqdeep bhagat", year: 2012 },
];

let filtered_arr = books_list.filter((book) => {
  console.log(book.year >= 2010);
  return book.year >= 2010;
}).map((book)=>{
   return({...book,author:book.author.toUpperCase()});
});

console.log(filtered_arr);
